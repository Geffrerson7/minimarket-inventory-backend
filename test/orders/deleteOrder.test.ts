const request = require("supertest");
import { app } from "../../src/app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* describe("order", () => {
  it("should return: Deleted", async () => {
    const expectedResponse = {
      ok: false,
      message: "Deleted"
    };
    const result = await request(app).delete("/api/v1/orders/3").expect(500);

    expect(result.body).toEqual(expectedResponse);
  });
}); */
