import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should count on baris di database', async () => {
        const count = await prismaClient.costumer.count({
            where : {
                name : 'fikri'
            }
        });

        console.log(count);
        expect(count).toBe(2);
    });
});