import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should can do paging',async () => {
        const page1 = await prismaClient.costumer.findMany({
            skip : 0,
            take : 2,
        });
        expect(page1.length).toBe(2);
        console.log(page1);

        const page2 = await prismaClient.costumer.findMany({
            skip : 2,
            take : 2,
        });
        expect(page2.length).toBe(2);
        console.log(page2);

        const page3 = await prismaClient.costumer.findMany({
            skip : 4,
            take : 2,
        });
        expect(page3.length).toBe(2);
        console.log(page3);
    });
});