import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return (
			<h2 style={{ textAlign: "center" }}>Damn, nothin' found!</h2>
		)
	}

	return (
		<div className='post-list'>
			<h2 style={{ textAlign: "center" }}>
				{title}
			</h2>
			{posts.map((post, index) =>
				<PostItem remove={remove} number={index + 1} post={post} key={post.id} />
			)}
		</div>
	);
};

export default PostList