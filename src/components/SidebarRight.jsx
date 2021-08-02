import React from 'react';
import { Link } from 'react-router-dom';

import SidebarCard from './SidebarCard';

export default function SidebarNav() {
	return (
		<aside>
			<SidebarCard>
				<header>All Posts Demo</header>
				<h2>DEV Community is a community of 670,881 amazing developers</h2>
				<p>We're a place where coders share, stay up-to-date and grow their careers. </p>
				<Link className="btn btn-primary w-100 font-bold mb-3">Create account</Link>
				<Link className="btn btn-link w-100 font-bold">Log in</Link>
				<footer>
					<Link to="/posts/all">See all posts</Link>
				</footer>
			</SidebarCard>

			<SidebarCard>
				<h2>DEV Community is a community of 670,881 amazing developers</h2>
				<p>We're a place where coders share, stay up-to-date and grow their careers. </p>
				<Link className="btn btn-primary w-100 font-bold mb-3">Create account</Link>
				<Link className="btn btn-link w-100 font-bold">Log in</Link>
			</SidebarCard>
		</aside>
	);
}
