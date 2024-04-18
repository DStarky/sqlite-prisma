import { removePost } from '@/actions/blog';
import { getAllPosts, getPostById } from '@/services/posts';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
	params: {
		id: string;
	};
};

export async function generateStaticParams() {
	const posts: any[] = await getAllPosts();

	return posts.map(post => ({
		slug: post.id.toString(),
	}));
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
	const post = await getPostById(id);

	return {
		title: post?.title ?? '',
	};
}

export default async function Post({ params: { id } }: Props) {
	const post = await getPostById(id);

	if (!post) {
		return <h1>Post not found</h1>;
	}

	return (
		<>
			<h1 className='text-3xl mb-4'>{post.title}</h1>
			<p>{post.content}</p>

			<form action={removePost.bind(null, id)}>
				<input
					type='submit'
					value='delete post'
					className='block text-red-500 py-2 px-4 border-[1px] border-red-500 rounded cursor-pointer hover:bg-red-500 hover:text-white transition-colors mt-4'
				/>
			</form>

			<Link
				href={`/blog/${id}/edit`}
				className='inline-block text-blue-500 py-2 px-4 border-[1px] border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white transition-colors mt-4'>
				Edit
			</Link>
		</>
	);
}
