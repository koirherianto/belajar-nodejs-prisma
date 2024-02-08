import { prismaClient } from "../src/prisma-client";

describe('one to many test', () => {
    it('insert and inclune (one to many)', async () => {
        const comment = await prismaClient.comment.create({
            data : {
                customer_id : 7,
                title : 'ini title comment',
                description : 'ini description comment'
            },
            include : {
                customer : true
            }
        });

        console.log(comment);
    });

    it('bisa membuat data sekaligus banyak kepada one - to many', async () => {
        const costumer = await prismaClient.customer.create({
            data : {
                name : 'sandiaga uno 2',
                email : 'sandiagauno2@gmail.com',
                phone : '299841822',
                comments : {
                    createMany : {
                        data : [
                            {
                                title : 'ini title 1 sandiaga uno 2',
                                description : 'ini description 1 sandiaga uno'
                            },
                            {
                                title : 'ini title 2 sandiaga uno 2',
                                description : 'ini description 2 sandiaga uno'
                            },
                            {
                                title : 'ini title 3 sandiaga uno 2',
                                description : 'ini description 4 sandiaga uno'
                            },
                        ]
                    }
                }
            },
            include : {
                comments : true
            }
        });

        console.log(costumer);
    });


    it('find many with relation', async () => {
        const costumer = await prismaClient.customer.findMany({
            where : {
                comments : {
                    some : {
                        title : {
                            contains : 'sandiaga uno'
                        }
                    }
                }
            },
            include : {
                comments : true
            }
        });

        console.log(costumer);
        console.log(costumer[0].comments);
    });
});