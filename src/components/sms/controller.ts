import { Prisma, PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const recieverNumber = process.env.RECIEVER_NUMBER;

const prisma = new PrismaClient();
const client = new Twilio(accountSid, authToken);

export const test = async (req: Request, res: Response): Promise<void> => {
  try {
    const createProducts = await prisma.product.create({ data: req.body });
    const productStock = await prisma.product.findMany({
      where: {
        stock: {
          lt: createProducts.thresshold_value as number,
        },
      },
    });
    const productNames: string[] = [];
    productStock.forEach(function (obj) {
      productNames.push(obj.name);
    });
    const smsBody = productNames.toString();
    if (accountSid && authToken && recieverNumber && twilioNumber) {
      const sms = await client.messages
        .create({
          from: twilioNumber,
          to: recieverNumber,
          body: "The following products need restocking: " + smsBody,
        })
        .then((message) => console.log(message.sid));
      res
        .status(201)
        .json({ ok: true, body: sms, message: "Product stock sent" });
    } else {
      console.error("Missing one argument");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: error });
  }
};
