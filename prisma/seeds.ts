import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
	{ title: 'Post 1', content: 'Content 1' },
	{ title: 'Post 2', content: 'Content 2' },
	{ title: 'Post 3', content: 'Content 3' },
];

const seed = async () => {
	await prisma.post.deleteMany();
	for (const post of posts) {
		await prisma.post.create({ data: post });
	}
};

seed();