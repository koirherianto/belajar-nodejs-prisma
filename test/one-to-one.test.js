import { prismaClient } from "../src/prisma-client";

describe('coba relasi', () => {
    it('should can create one to one relasi', async () => {
        const wallet = await prismaClient.wallet.create({
            data : {
                costumer_id : 3,
                balance : 5000,
            },
            include : {
                costumer : true
            }
        });

        console.log(wallet);

        expect(wallet.balance).toBe(5000);
        expect(wallet.costumer_id).toBe(3);
    });

    it('bisa membuat relasi ketika diciptakan (one to one)', async () => {
        const costumer = await prismaClient.customer.create({
            data : {
                name : 'putra',
                email : 'putra@gmail.com',
                phone : '476387635625',
                wallet : {
                    create : {
                        balance : 100
                    }
                }
            },
            include : {
                wallet : true
            }
        });

        console.log(costumer);

        expect(costumer.name).toBe('putra');
        expect(costumer.wallet.balance).toBe(100);
    });

    it('should can find one to one with relation', async () => {
        const costumer = await prismaClient.customer.findUnique({
            where : {
                id : 22
            },
            include : {
                wallet : true
            }
        });

        console.log(costumer);
    });
});