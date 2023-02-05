import type { Request, Response } from "express";
import prisma from "../../datasource/";

export const store = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        await prisma.orderDetails.create({
            data: {
                quantity: data.quantity,
                product: { connect: { id: data.product_id } },
                order: { connect: { id: data.order_id } },
            }
        });
        res.status(201).json({
            ok: true,
            body: data,
            message: "Order detail created successfully"
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: "Server Error" });
    }
}

export const getOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const idOrder = Number(req.params.idOrder);
        const orderDetail = await prisma.orderDetails.findMany({
            where: {
                order_id: idOrder,
            },
            include: {
                product: true,
            },
        });
        res.json({ ok: true, data: orderDetail, message: "All the products of the order were obtained" });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};

export const updateOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        const idOrder = Number(req.params.idOrder);
        await prisma.orderDetails.updateMany({
            where: {
                order_id: idOrder,
                id: data.orderDetail_id
            },
            data: {
                product_id: data.product_id,
                quantity: data.quantity
            }
        });
        const updateOrderDetail = await prisma.orderDetails.findMany({
            where: {
                order_id: idOrder,
                id: data.orderDetail_id
            },
        })
        res.json({ ok: true, data: updateOrderDetail, message: "Order detail updated!" });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
