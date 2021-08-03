import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { StoreContext } from '../contexts/StoreContext';

import LayoutBase from '../components/LayoutBase';
import PostCard from '../components/PostCard';

export default function Home() {
	const { getPosts, posts, loading, failed } = React.useContext(StoreContext);
	const [type, setType] = React.useState('Feed');
	const [typeQuantity, setTypeQuantity] = React.useState(0);

	const types = [
		{ name: 'Feed', quantity: 0 },
		{ name: 'Week', quantity: 7 },
		{ name: 'Month', quantity: 30 },
		{ name: 'Year', quantity: 365 },
		{ name: 'Infinity', quantity: 366 },
		{ name: 'Latest', quantity: 1 },
	];

	React.useEffect(() => {
		getPosts(typeQuantity);
	}, [typeQuantity]);

	const handleTypePosts = (text) => {
		const qtdy = types.filter((f) => f.name === text);

		setType(text);
		setTypeQuantity(qtdy[0].quantity);
	};

	return (
		<LayoutBase isSidebar={true}>
			<div className="nav-tabs__post">
				<div className="row mb-4">
					<div className="col">Posts</div>

					<div className="col">
						<div className="btn-group">
							{types.map((text) => (
								<button
									key={text.name}
									type="button"
									className={`btn btn-link ${type === text.name && 'active'}`}
									onClick={({ target }) => handleTypePosts(target.innerText)}
								>
									{text.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{loading ? (
				<div className="alert alert-info">Loading posts...</div>
			) : failed ? (
				<div className="alert alert-danger">An error occurred</div>
			) : (
				<>
					{posts.map((post) => (
						<PostCard
							key={post.id}
							id={post.id}
							image={post.cover_image}
							slug={post.slug}
							path={post.path}
							date={post.readable_publish_date}
							title={post.title}
							description={post.description}
							tags={post.tag_list}
							user={post.user}
							reactionsCount={post.comments_count}
							commentsCount={post.public_reactions_count}
							readTime={post.reading_time_minutes}
						/>
					))}
				</>
			)}
		</LayoutBase>
	);
}
