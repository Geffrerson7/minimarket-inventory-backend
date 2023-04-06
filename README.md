# System Inventory
## Description

It is an API that registers, updates and deletes the stock of products, purchase orders, customers, suppliers, sends an SMS to notify the lack of stock of a product and updates the relative humidity and temperature of the product warehouse in real time. Designed with Node, Express, Prisma, Supabase, TypeScript, Twilio and Pusher.

## Technologies and programming languages

* **TypeScript** (v. 4.9.4) [Source](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* **Express** (v. 4.18.2)  [Source](https://www.npmjs.com/package/express)
* **Prisma** (v. 4.9.0) [Source](https://www.prisma.io/docs)
* **nodemon** (v. 2.0.20) [Source](https://www.npmjs.com/package/nodemon)
* **cors** (v. 2.8.5) [Source](https://www.npmjs.com/package/cors)
* **dotenv** (v. 16.0.3) [Source](https://www.npmjs.com/package/dotenv)
* **jsonwebtoken** (v. 9.0.0) [Source](https://www.npmjs.com/package/jsonwebtoken)
* **bcrypt** (v. 5.1.0) [Source](https://www.npmjs.com/package/bcrypt)
* **concurently**  (v. 7.6.0) [Source](https://www.npmjs.com/package/concurrently)
* **ts-node**  (v. 10.9.1) [Source](https://www.npmjs.com/package/ts-node)
* **tslib**  (v. 2.4.1) [Source](https://www.npmjs.com/package/tslib)
* **twilio**  (v. 4.7.1) [Source](https://www.twilio.com/docs/libraries/node)
* **vercel**  [Source](https://vercel.com/docs)
* **jest**  (v. 29.4.1) [Source](https://jestjs.io/docs/getting-started)
* **supertest**  (v. 29.4.1) [Source](https://www.npmjs.com/package/supertest)

## ERD

![ERD-INVENTORY](https://user-images.githubusercontent.com/61089189/230498920-2eb26403-0e05-4336-96f0-9ff5d40b5235.png)

## API Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/24256278/2s93RZMVfE)

## Part Frontend of this project base in Angular

https://github.com/Geffrerson7/Proyecto-Unidad-8-Front

## Server for reading and barcodes in real time

https://github.com/Jhonny7521/Reading-sensors-in-real-time

## Initialization

Run `npm install` to install dependencias and libraries use in this project.

## Prisma migration

Run `npx prisma migrate dev --name init` for create migrations of our schema

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:8000/`. The application will automatically reload if you change any of the source files.

## Demo

[![Deploy with Vercel](https://vercel.com/button)](https://proyecto-unidad-8-back.vercel.app)

