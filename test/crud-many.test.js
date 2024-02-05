import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should create many records', async () => {
        // ini  otomatis pakai transaction
        const {count} = await prismaClient.costumer.createMany({
            data : [
                {
                    name : 'orang',
                    email : 'orang1@gmail.com',
                    phone : '1'
                },
                {
                    name : 'orang',
                    email : 'orang2@gmail.com',
                    phone : '2'
                }
            ]
        });

        expect(count).toBe(2);
    });

    it('should update many records', async () => {
        // ini  otomatis pakai transaction
        const {count} = await prismaClient.costumer.updateMany({
            where : {
                name : 'orang'
            },
            data : {
                name : 'manusia'
            }
        });

        expect(count).toBe(2);
    });

    it('should delete many records', async () => {
        // ini otomatis pakai transaction
        const {count} = await prismaClient.costumer.deleteMany({
            where : {
                name : 'manusia'
            }
        });

        expect(count).toBe(2);
    });


    it('should read many records', async () => {
        // ini otomatis pakai transaction
        const costumers = await prismaClient.costumer.findMany({});

        console.log(costumers);

        expect(costumers.length).toBe(7);
    });
});