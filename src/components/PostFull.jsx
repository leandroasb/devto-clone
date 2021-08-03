import React from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/styles/posts.module.css';

export default function PostFull({
	id,
	image,
	slug,
	path,
	date,
	title,
	description,
	content,
	user,
	tags,
	reactionsCount,
	commentsCount,
	readTime,
}) {
	return (
		<div className="row">
			<div className="col-12 col-sm-1 d-none d-sm-block">
				<ul className={styles.post__side}>
					<li>
						<i className="far fa-heart"></i>
						{reactionsCount}
					</li>
					<li>
						<i className="far fa-comment fa-flip-horizontal"></i>
						{commentsCount}
					</li>
				</ul>
			</div>

			<div className="col-12 col-sm-11">
				<article className={styles.post}>
					{image && (
						<div className={styles.image__featured}>
							<img src={image} className="img-fluid" alt={title} />
						</div>
					)}

					<div className="p-3 px-md-5 py-md-4">
						<div className="row d-flex align-items-center mb-4">
							<div className="col-2">
								<img src={user?.profile_image_90} className="img-fluid" alt={user?.name} />
							</div>
							<div className="col">
								By <strong>{user?.name}</strong> in <strong>{date}</strong> - {readTime} min read
							</div>
						</div>

						<hgroup>
							<h2 className={styles.title}>{title}</h2>
							<h3 className={styles.subtitle}>{description}</h3>
						</hgroup>

						{tags && (
							<div className={styles.tags}>
								{tags.map((tag) => (
									<a key={tag} href={`https://dev.to/t/${tag}`} target="_blank">
										<span>#</span> {tag}
									</a>
								))}
							</div>
						)}

						<hr />

						<div className="row">
							<div className="col">{user?.name}</div>
							<div className="col">{date}</div>
						</div>

						<div className={styles.content}>
							<div dangerouslySetInnerHTML={{ __html: content }} />
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}

PostFull.propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
	slug: PropTypes.string,
	path: PropTypes.string,
	date: PropTypes.string,
	description: PropTypes.string,
	content: PropTypes.string,
	user: PropTypes.object,
	tags: PropTypes.array,
	reactionsCount: PropTypes.number,
	commentsCount: PropTypes.number,
	readTime: PropTypes.number,
};
