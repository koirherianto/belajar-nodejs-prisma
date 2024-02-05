import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('Select field yang akan ditampilakan (create)', async () => {
        const costumer = await prismaClient.costumer.create({
            data : {
                name : 'mahluk3',
                email : 'mahluk3@gmail.com',
                phone : '3'
            },
            select : {
                name : true,
                email : true
            }
        });
        console.log(costumer);
        expect(costumer.name).toBe('mahluk3');
    });

    it('Select field yang akan ditampilakan (find many)', async () => {
        const costumers = await prismaClient.costumer.findMany({
            select : {
                name : true,
                email : true
            }
        });
        console.log(costumers);
        for (const costumer of costumers) {
            expect(costumer.id).toBeUndefined();
            expect(costumer.name).toBeDefined();
            expect(costumer.email).toBeDefined();
            expect(costumer.phone).toBeUndefined();
        }
    });
});