import { createPost } from '@/actions/blog';

export default function NewPostForm() {
	return (
		<form
			className='form'
			action={createPost}>
			<input
				type='text'
				placeholder='title'
				required
				name='title'
			/>
			<textarea
				placeholder='content'
				required
				name='content'
				className='edit-text'
			/>
			<div>
				<input
					type='submit'
					value='Add post'
				/>
			</div>
		</form>
	);
}
