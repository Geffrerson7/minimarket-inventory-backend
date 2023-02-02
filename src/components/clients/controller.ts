import { Prisma, PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const client = await prisma.client.create({ data: req.body });
    res
      .status(201)
      .json({ ok: true, body: client, message: "Client created successfully" });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        res
          .status(400)
          .json({ ok: false, body: "", message: "Client already saved" });
      }
    } else {
      res.status(500).json({ ok: false, body: error, message: "Server Error" });
    }
  }
};

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const clients = await prisma.client.findMany();
    res.json({ ok: true, body: clients });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const idClient = Number(req.params.idClient);
    const client = await prisma.client.findUnique({
      where: {
        id: idClient,
      },
    });
    res.json({ ok: true, body: client, message: "Client found" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.idClient);
    const client = await prisma.client.update({
      where: { id },
      data: req.body,
    });
    res.json({
      ok: true,
      body: client,
      message: "Client updated successfully",
    });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.idClient);
    await prisma.client.delete({
      where: { id },
    });
    res.status(204).json({ ok: true, body: "", message: "Deleted" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};
