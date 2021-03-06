import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderMenuMobile from './HeaderMenuMobile';
import styles from '../assets/styles/header.module.css';

export default function Header() {
	const [fixedMenu, setFixedMenu] = React.useState(false);

	const handleFixedMenu = () => {
		const scroll = () => (window.scrollY >= 55 ? setFixedMenu(true) : setFixedMenu(false));
		window.addEventListener('scroll', scroll);
	};
	handleFixedMenu();

	return (
		<header className={`${styles.wrapper} ${fixedMenu && styles.menu__fixed}`}>
			<div className="container">
				<div className="row gx-2 d-flex align-items-center">
					<div className="col-6 col-md-1">
						<HeaderMenuMobile />
						<HeaderLogo />
					</div>

					<div className="col-md-6 d-none d-md-block">
						<HeaderSearch />
					</div>

					<div className="col-6 col-md-5 text-end">
						<Link to="/login" className="btn btn-link font-bold me-2 d-none d-md-inline">
							Log in
						</Link>
						<Link to="/register" className="btn btn-primary font-bold">
							Create account
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

Header.propTypes = {
	fixedMenu: PropTypes.bool,
};
