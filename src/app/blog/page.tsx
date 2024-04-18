import { Metadata } from 'next';

import Link from 'next/link';
import { getAllPosts } from '../../services/posts';

export const metadata: Metadata = {
	title: 'Test Blog',
	description: 'Test Blog',
};

export const revalidate = 10;

export default async function Blog() {
	const posts = await getAllPosts();

	return (
		<>
			<div className='px-6 py-12'>
				<h1 className='text-3xl mb-4'>Test Blog</h1>

				<ul>
					{posts.map(post => (
						<li
							key={post.id}
							className='mb-4 text-blue-500 underline'>
							<Link href={`/blog/${post.id}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
