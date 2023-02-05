import type { Request, Response } from "express";
import prisma from "../../datasource/";

// CREATE product

export const store = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        await prisma.product.create({ data: data });
        res.status(201).json({ 
            ok: true,
            body: data,
            message: "Product created successfully" });
    } catch (error) {
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
            where: { id }
        });
        res.status(200).json({
            ok: "true",
            data: products,
            message: "Get this product according to ID"
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};

// UPDATE Tracks by {ID}

export const update_product = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const { data } = req.body;
    try {
        const products = await prisma.product.update({
            where: { id },
            data: data
        });
        res.status(200).json({
            message: "Product updated successfully",
            data: products,
        });

    } catch (error) {
        res.status(204).json({ ok: false, message: error });
    }
};

//DELETE Track by {ID}

export const delete_product_by_id = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)

    try {
        await prisma.product.delete({
            where: { id },
        });
        res.status(200).json({
            ok: true, message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            ok: false, message: error
        });
    }
};
