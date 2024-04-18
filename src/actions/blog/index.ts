'use server';

import { prisma } from '@/lib/prisma';
import type { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(data: FormData) {
	const { title, content } = Object.fromEntries(data) as Omit<Post, 'id'>;

	const post = await prisma.post.create({
		data: {
			title,
			content,
		},
	});

	redirect(`/blog/${post.id}`);
}

export async function updatePost(data: FormData) {
	const { title, content, id } = Object.fromEntries(data) as Post;

  const post = await prisma.post.update({
    where: {
      id
    },
    data: {
      title,
      content
    }
  })

	revalidatePath(`/blog/${post.id}`);
	redirect(`/blog/${post.id}`);
}

export async function removePost(id: string) {
  await prisma.post.delete({ where: { id } });


	revalidatePath('/blog/...');
	redirect('/blog/...');
}
