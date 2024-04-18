import { PrismaClient } from '@prisma/client';

const PrismaClientSingleton = () => new PrismaClient();

export const prisma = globalThis.prisma || PrismaClientSingleton();

declare global {
	var prisma: ReturnType<typeof PrismaClientSingleton> | undefined;
}

if (process.env.NODE_ENV !== 'production') {
	globalThis.prisma = prisma;
}
