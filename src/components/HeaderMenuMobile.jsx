import React from 'react';

import styles from '../assets/styles/header.module.css';

export default function HeaderMenuMobile() {
	return (
		<div className={`${styles.menu__mobile} d-inline d-md-none`}>
			<button type="button" className={`btn btn-link ${styles.btn__menu} font-bold me-2`}>
				<i class="fas fa-bars"></i>
			</button>
		</div>
	);
}
