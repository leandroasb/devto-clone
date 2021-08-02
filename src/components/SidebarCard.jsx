import React from 'react';

import styles from '../assets/styles/sidebar.module.css';

export default function SidebarCard({ children }) {
	return <article className={styles.card}>{children}</article>;
}
