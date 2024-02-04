import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should be able to execute sql', async () => {
        const id = "2";
        const name = "koir herianto";

        // $executeRaw akan digunakan untuk mengirim data sql untuk mengeksekusi data insert update delete // itulah kenapa returnya angka
        // $executeRaw akan me return angka, berapa baris impact
        const impacted = await prismaClient.$executeRaw `INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
        expect(impacted).toBe(1);
    });
});