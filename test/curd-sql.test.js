import { prismaClient } from "../src/prisma-client";

it('should be able to create costumer', async () => {
    const user = await prismaClient.costumer.create({
        data : {
            name : 'koir herianto',
            email : 'koir.harianto@gmail.com',
            phone : '08'
        }
    });

    console.log(user);  

    expect(user.name).toBe('koir herianto');
    expect(user.email).toBe('koir.harianto@gmail.com');
});

it('should be able to read a costumer', async () => {
    const user = await prismaClient.costumer.findUnique({
        where: {
          id: 1,
        },
      });

    console.log(user);  

    expect(user.name).toBe('koir herianto');
    expect(user.email).toBe('koir.harianto@gmail.com');
});

it('should be able to read costumers', async () => {
    const users = await prismaClient.costumer.findMany()

    console.log(users);  

    for (const user of users) {
        // expect(user.name).toBe('koir herianto');
        // expect(user.email).toBe('koir.harianto@gmail.com');
    }
});

it('should be able to update costumer', async () => {
    const users = await prismaClient.costumer.update({
        where : {
            email : 'koir.harianto@gmail.com'
        },
        data: {
            phone : '082333119622'
        }
    });

    console.log(users);  

});

it('should be able to delete costumer', async () => {
    const user = await prismaClient.costumer.delete({
        where :  {
            id : 2
        }
    });

    console.log(user);  

});