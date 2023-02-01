import type { Request, Response } from "express";
import { PrismaClient } from  "@prisma/client"

const prisma = new PrismaClient();

// CREATE playlist
export const store = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        await prisma.playlist.create({ data: data });
        res.status(201).json({ ok: true, message: "Playlist creado correctamente" });
    } catch(error) {
        console.log(error)
        res.status(500).json({ ok: false, message: error });
    }
};