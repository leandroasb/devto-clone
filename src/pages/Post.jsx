import React from 'react';
import { useLocation } from 'react-router-dom';

import { StoreContext } from '../contexts/StoreContext';

import LayoutBase from '../components/LayoutBase';
import PostFull from '../components/PostFull';

export default function Post() {
	const { getPost, post, loading, failed } = React.useContext(StoreContext);

	const location = useLocation();

	React.useEffect(() => {
		getPost(location.pathname.replace('/post/', ''));
	}, [location]);

	console.log(post);

	return (
		<LayoutBase isSidebar={false}>
			{loading ? (
				<div className="alert alert-info">Loading post...</div>
			) : failed ? (
				<div className="alert alert-danger">An error occurred</div>
			) : (
				<PostFull
					key={post.id}
					id={post.id}
					image={post.cover_image}
					slug={post.slug}
					path={post.path}
					date={post.readable_publish_date}
					title={post.title}
					description={post.description}
					content={post.body_html}
					tags={post.tags}
					user={post.user}
					reactionsCount={post.comments_count}
					commentsCount={post.public_reactions_count}
					readTime={post.reading_time_minutes}
				/>
			)}
		</LayoutBase>
	);
}
