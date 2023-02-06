const request = require("supertest")
import { app } from "../../src/app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe('category', () => {
  it('should return a list of objects',async () => {
    
    const categories = await prisma.category.findMany();
    const expectedResponse = {
      ok: true, 
      body: categories 
    };

    const result = await request(app)
      .get('/api/v1/categories/')
      .expect(200)

      expect(result.body).toEqual(expectedResponse)
    
  });
  
});