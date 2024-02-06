import { prismaClient } from "../src/prisma-client";

describe('agregat prisma', () => {
    it('should be query using grub by', async () => {
        const results = await prismaClient.product.groupBy({
            by : ['category'],
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

        for (const result of results) {
            console.log(`category ${result.category} memiliki rata - rata ${result._avg.price}`);
        }
    });
});