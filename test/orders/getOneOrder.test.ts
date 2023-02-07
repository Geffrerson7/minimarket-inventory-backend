const request = require("supertest");
import { app } from "../../src/app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("category", () => {
  it("should return a order object", async () => {
    const order = await prisma.order.findUnique({
      where: {
        id: 1,
      },
    });
    const expectedResponse = {
      ok: true,
      body: order,
      message: "Order found",
    };

    const result = await request(app).get("/api/v1/orders/1").expect(200);

    expect(result.body).toEqual(expectedResponse);
  });
});
