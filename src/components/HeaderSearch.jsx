import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import styles from '../assets/styles/header.module.css';

export default function HeaderSearch() {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const [term, setTerm] = React.useState(query.get('q') || '');

	return (
		<div className={styles.search}>
			<input
				type="text"
				placeholder="Search..."
				onChange={({ target }) => setTerm(target.value)}
				className="form-control"
			/>
		</div>
	);
}

HeaderSearch.propTypes = {
	term: PropTypes.string,
};
