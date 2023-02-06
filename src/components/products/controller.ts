import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import sendSMS from "../../services/twilio";

const prisma = new PrismaClient();

// CREATE product

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const producDtata = await prisma.product.create({ data: req.body });
    res.status(201).json({
      ok: true,
      body: producDtata,
      message: "Product created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: error });
  }
};

//GET all product

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({
      ok: true,
      body: products,
      message: "Get all products successfully",
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

// GET product by {ID}

export const get_product_by_id = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const products = await prisma.product.findUnique({
      where: { id },
    });
    res.status(200).json({
      ok: "true",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

// UPDATE products by {ID}

export const update_product = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  console.log('hola')
  try {
    const products = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    const checkProductStock = await prisma.product.findMany({
      where: {
        stock: {
          lt: req.body.thresshold_value as number,
        },
      },
    });
    console.log(checkProductStock);
    console.log(checkProductStock.length);
    if (checkProductStock.length != 0) {
      sendSMS(checkProductStock);
    }
    return res.status(200).json({
      message: "Product updated successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);
    return res.status(204).json({ ok: false, message: error });
  }
};

//DELETE Track by {ID}

export const delete_product_by_id = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    await prisma.product.delete({
      where: { id },
    });
    res.status(200).json({
      ok: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};
