import { prismaClient } from "../src/prisma-client";

describe(' prisma', () => {
    it('should be query using or operator', async () => {
        const results = await prismaClient.product.findMany({
            where : {
                OR : [
                    {
                        name : 'keyboard',
                    },
                    {
                        name : 'Backpack',
                    },
                ],
                
            },
            orderBy : {
                name : 'desc'
            },
            
        });

        console.log(results);
        expect(results.length).toBe(2);
    });
});