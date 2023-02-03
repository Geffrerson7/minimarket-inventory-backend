import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const order = await prisma.order.create({
      data: {
        order_code: data.order_code,
        client: { connect: { id: data.client } },
        order_details: {
          create: data?.order_detail?.map((c: any) => ({
            product: {
              connect: {
                id: c.product,
              },
            },
            quantity: c.quantity,
          })),
        },
      },
    });
    //evento
    res
      .status(201)
      .json({ ok: true, body: order, message: "Order placed successfully" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const orders = await prisma.order.findMany();
    res.json({ ok: true, body: orders });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const idOrder = Number(req.params.idOrder);
    const order = await prisma.order.findUnique({
      where: {
        id: idOrder,
      },
      include: {
        client: {
          select: {
            document_id: true,
          },
        },
        order_details: {
          include: {
            product: true,
          },
        },
      },
    });
    res.json({ ok: true, body: order, message: "Order found" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.idOrder);
    const order = await prisma.order.update({
      where: { id },
      data: req.body,
    });
    res.json({
      ok: true,
      body: order,
      message: "Order updated successfully",
    });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

//soft delete
export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.idOrder);
    const deleteOrderDetails = prisma.orderDetails.deleteMany({
      where: {
        order_id: id,
      },
    });

    const deleteOrder = prisma.order.delete({
      where: {
        id,
      },
    });

    const transaction = await prisma.$transaction([
      deleteOrderDetails,
      deleteOrder,
    ]);

    res.status(204).json({ ok: true, body: "", message: "Deleted" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};
