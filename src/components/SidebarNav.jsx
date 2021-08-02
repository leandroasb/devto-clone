import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../assets/styles/sidebar.module.css';
import iconHome from '../assets/images/icon-home.png';
import iconSign from '../assets/images/icon-sign.png';
import iconListings from '../assets/images/icon-listings.png';
import iconPodcasts from '../assets/images/icon-podcasts.png';
import iconVideos from '../assets/images/icon-videos.png';
import iconTags from '../assets/images/icon-tags.png';
import iconFaq from '../assets/images/icon-faq.png';
import iconShop from '../assets/images/icon-shop.png';
import iconSponsors from '../assets/images/icon-sponsors.png';
import iconAbout from '../assets/images/icon-about.png';
import iconContact from '../assets/images/icon-contact.png';
import iconCode from '../assets/images/icon-code.png';
import iconPrivacy from '../assets/images/icon-privacy.png';
import iconTerms from '../assets/images/icon-terms.png';

export default function SidebarNav() {
	return (
		<nav className={styles.categories}>
			<h2>DEV Community</h2>
			<ul className={styles.nav__list}>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/">
						<img src={iconHome} alt="Home" />
						Home
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/login">
						<img src={iconSign} alt="Sign In/Up" />
						<strong>Sign In/Up</strong>
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/listings">
						<img src={iconListings} alt="Listings" />
						Listings
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/podcasts">
						<img src={iconPodcasts} alt="Podcasts" />
						Podcasts
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/videos">
						<img src={iconVideos} alt="Videos" />
						Videos
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/tags">
						<img src={iconTags} alt="Tags" />
						Tags
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/faq">
						<img src={iconFaq} alt="FAQ" />
						FAQ
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="devshop">
						<img src={iconShop} alt="DEV Shop" />
						DEV Shop
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/sponsors">
						<img src={iconSponsors} alt="Sponsors" />
						Sponsors
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/about">
						<img src={iconAbout} alt="About" />
						About
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/contact">
						<img src={iconContact} alt="Contact" />
						Contact
					</Link>
				</li>
			</ul>

			<h2 className="mt-4">Other</h2>
			<ul className={styles.nav__list}>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/code-of-conduct">
						<img src={iconCode} alt="Code of Conduct" />
						Code of Conduct
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/privacy">
						<img src={iconPrivacy} alt="Privacy Policy" />
						Privacy Policy
					</Link>
				</li>
				<li className={styles.nav__item}>
					<Link className={styles.nav__link} to="/terms">
						<img src={iconTerms} alt="Terms of use" />
						Terms of use
					</Link>
				</li>
			</ul>
		</nav>
	);
}
