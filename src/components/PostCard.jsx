import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../assets/styles/posts.module.css';

export default function PostCard({
	id,
	image,
	slug,
	path,
	date,
	title,
	description,
	user,
	tags,
	reactionsCount,
	commentsCount,
	readTime,
}) {
	return (
		<article className={styles.card}>
			{image && (
				<div className={styles.image__featured}>
					<Link to={`/post${path}`}>
						<img src={image} className="img-fluid" alt={title} />
					</Link>
				</div>
			)}

			<div className="row">
				<div className="col-2">
					<img src={user?.profile_image_90} className={styles.avatar} alt={user?.name} />
				</div>

				<div className="col-10 ps-4">
					<div className={styles.author}>{user?.name}</div>
					<div className={styles.date}>{date}</div>
					<h2 className={styles.title}>
						<Link to={`/post/${slug}`}>{title}</Link>
					</h2>
					<div className={styles.description}>{description}</div>

					{tags && (
						<div className={styles.tags}>
							{tags.map((tag) => (
								<a href={`https://dev.to/t/${tag}`} target="_blank">
									<span>#</span> {tag}
								</a>
							))}
						</div>
					)}
				</div>

				<div className={styles.footer}>
					<div className="col-12 offset-lg-2 col-lg-10 ps-lg-4">
						<div className="row d-flex justify-content-between">
							<div className="col">
								<i className="far fa-heart me-2"></i>
								{reactionsCount ? reactionsCount + ' reactions' : '0 reactions'}{' '}
							</div>
							<div className="col text-center">
								<i className="far fa-comment fa-flip-horizontal me-2"></i>
								{commentsCount ? commentsCount + ' comments' : '0 comments'}
							</div>
							<div className="col text-end">{readTime} min read</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

PostCard.propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
	slug: PropTypes.string,
	path: PropTypes.string,
	date: PropTypes.string,
	description: PropTypes.string,
	user: PropTypes.array,
	tags: PropTypes.array,
	reactionsCount: PropTypes.number,
	commentsCount: PropTypes.number,
	readTime: PropTypes.number,
};
