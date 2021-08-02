import React from 'react';

import styles from '../assets/styles/footer.module.css';

export default function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className="container">
				<p>
					<strong>DEV Community</strong> – A constructive and inclusive social network for software
					developers. With you every step of your journey.
				</p>
				<p>
					Built on <strong>Forem</strong> — the <strong>open source</strong> software that powers{' '}
					<strong>DEV</strong> and other inclusive communities.
				</p>
				<p>
					Made with love and <strong>Ruby on Rails</strong>. DEV Community © 2016 - 2021.
				</p>

				<p className="mt-5">
					Developed by <strong>Leandro Bezerra</strong> <em>(Developer Front-End)</em>
				</p>
				<p>
					<a href="https://www.linkedin.com/in/leandroasb/" target="_blank">
						https://www.linkedin.com/in/leandroasb/
					</a>
				</p>
			</div>
		</div>
	);
}
