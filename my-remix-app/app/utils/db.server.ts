import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var db: PrismaClient;
}

let db: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    db = new PrismaClient();
  } else {
    if (!global.db) {
      global.db = new PrismaClient();
    }

    db = global.db;
  }
}

export {db};