import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should can do sorting',async () => {
        const page1 = await prismaClient.costumer.findMany({
            skip : 0,
            take : 8,
            orderBy : [
                {
                    name : 'asc'
                },
                {
                    email : 'desc'
                }
            ]
        });
        console.log(page1);
        expect(page1.length).toBe(7);
    });
});