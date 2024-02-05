import { prismaClient } from "../src/prisma-client";

it('Sequential Transction', async () => {
    const [gajali, fikri] = await prismaClient.$transaction([
        prismaClient.costumer.create({
            data : {
                name : 'gajali',
                email : 'gajali@gmail.com',
                phone : '081'
            }
        }),
        prismaClient.costumer.create({
            data : {
                name : 'fikri',
                email : 'fikri@gmail.com',
                phone : '082'
            }
        })
    ]);


    expect(gajali.name).toBe('gajali');
    expect(fikri.name).toBe('fikri');
});

it('Interactif Transction', async () => {
    const result = await prismaClient.$transaction(async (prisma) => {
        const gajali = await prisma.costumer.create({
            data : {
                name : 'gajali3',
                email : 'gajali3@gmail.com',
                phone : '085'
            }
        });

        const fikri = await prisma.costumer.create({
            data : {
                name : 'fikri3',
                email : 'fikri3@gmail.com',
                phone : '086'
            }
        })

        return [gajali, fikri];
    }, {
        timeout : 5
    });

    const [gajali , fikri] = result;

    expect(gajali.name).toBe('gajali3');
    expect(fikri.name).toBe('fikri3');
});
