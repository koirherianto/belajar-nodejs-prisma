import { prismaClient } from "../src/prisma-client";

describe('Prisma Clien', () => {
    it('should have auto increment', async () => {
        const data = await prismaClient.category.create({
            data : {
                name : 'electronik'
            }
        });

        console.log(data);

        expect(data).toHaveProperty('id');
    });
});