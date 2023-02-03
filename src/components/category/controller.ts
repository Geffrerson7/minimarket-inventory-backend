import { Prisma, PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = await prisma.category.create({ data: req.body });
    res
      .status(201)
      .json({ ok: true, body: category, message: "Category created successfully" });
  } catch (error) {
    console.log(error);        
    res.status(500).json({ ok: false, message: error })
  }
};

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const categories = await prisma.category.findMany();
    res.json({ ok: true, body: categories });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const idCategory = Number(req.params.idCategory);
    const category = await prisma.category.findUnique({
      where: {
        id: idCategory,
      },
    });
    res.json({ ok: true, body: category, message: "Category found" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const idCategory = Number(req.params.idCategory);
    const category = await prisma.category.update({
      where: { id: idCategory },
      data: req.body,
    });
    res.json({
      ok: true,
      body: category,
      message: "Category updated successfully",
    });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const idCategory = Number(req.params.idCategory);
    await prisma.category.delete({
      where: { id : idCategory},
    });
    res.status(204).json({ ok: true, body: "", message: "Deleted" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};
