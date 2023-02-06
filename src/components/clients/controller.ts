import type { Request, Response } from "express";
import prisma from "../../datasource";

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const client_valid = await prisma.client.findUnique({
      where: { document_id: data.document_id },
    });
    if (client_valid) {
      res.status(400).json({ ok: false, message: "Client already saved" });
    } else {
      const client = await prisma.client.create({ data });
      res.status(201).json({
        ok: true,
        body: client,
        message: "Client created successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
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
    res.status(204).json({ ok: true, body: "Client was deleted", message: "Deleted" });
  } catch (error) {
    res.status(500).json({ ok: false, body: error, message: "Server Error" });
  }
};
