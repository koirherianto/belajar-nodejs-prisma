import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should be able to connect to database', async () => {
        const prisma = new PrismaClient(); // bisa tanpa pakai ini
        await prisma.$connect();

        // do someting

        await prisma.$disconnect();
    });
});


