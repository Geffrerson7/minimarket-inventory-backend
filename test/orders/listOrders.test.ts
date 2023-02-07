const request = require("supertest");
import { app } from "../../src/app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("order", () => {
  it("should return a list of objects", async () => {
    const orders = await prisma.order.findMany();
    const expectedResponse = {
      ok: true,
      body: orders
    };

    const result = await request(app).get("/api/v1/orders/").expect(200);

    expect(result.body).toEqual(expectedResponse);
  });
});
