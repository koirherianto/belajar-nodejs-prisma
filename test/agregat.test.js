import { prismaClient } from "../src/prisma-client";

describe('agrgat prisma', () => {
    it('should be query using agregat', async () => {
        const result = await prismaClient.product.aggregate({
            _min : {
                price : true
            },
            _max : {
                price : true
            },
            _avg : {
                price : true
            },
        });

        console.log(result._avg);
        console.log(result._max);
        console.log(result._min);
        
        expect(result._avg.price).toBe(2237083.3333);
        expect(result._max.price).toBe(12000000);
        expect(result._min.price).toBe(20000);


    });
});