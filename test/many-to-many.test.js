import { prismaClient } from "../src/prisma-client";

describe('Many To Many', () => {
    it('should insert many to many relation', async () => {
        const like = await prismaClient.like.create({
            data : {
                customer_id : 1,
                product_id : 1
            },
            include : {
                customer : true,
                product : true
            }
        });

        console.log(like);
    });

    it('should find with include', async () => {
        const customer = await prismaClient.customer.findUnique({
            where : {
                id : 1
            },
            include : {
                likes: {
                    include: {
                        product : true
                    }
                }
            }
        });

        console.log(customer);
    });

    it('should find many with include', async () => {
        // many to many
        const customers = await prismaClient.customer.findMany({
            where : {
                likes : {
                    some : {
                        product : {
                            name : {
                                contains : 'a'
                            }
                        }
                    }
                }
            },
            include : {
                likes: {
                    include: {
                        product : true
                    }
                }
            }
        });

        console.log(customers);
    });


    it('should create implicit relation', async () => {
        // many to many
        const customers = await prismaClient.customer.update({
            where : {
                id : 3
            },
            data : {
                loves : {
                    connect : [
                        {id : 2},
                        {id : 3}
                    ]
                }
            },
            include : {
                loves : true
            }
        });

        console.log(customers);
        console.log(JSON.stringify(customers));
    });
});