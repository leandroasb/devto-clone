import React from 'react';
import PropTypes from 'prop-types';

const URL_API = 'https://dev.to/api';

export const StoreContext = React.createContext(null);

export const StoreStorage = ({ children }) => {
	const [posts, setPosts] = React.useState({});
	const [loading, setLoading] = React.useState(true);
	const [failed, setFailed] = React.useState(false);

	const getPosts = async (type) => {
		try {
			const qtdy = type !== 0 ? '?top=' + type : '';

			setFailed(false);
			setPosts({});
			setLoading(true);

			const req = await fetch(URL_API + '/articles' + qtdy);
			const res = await req.json();

			setPosts(res);
		} catch (error) {
			setFailed(true);
		} finally {
			setLoading(false);
		}
	};

	return <StoreContext.Provider value={{ getPosts, posts, loading, failed }}>{children}</StoreContext.Provider>;
};

StoreStorage.contextType = {
	getPosts: PropTypes.func,
	posts: PropTypes.object,
	loading: PropTypes.bool,
	failed: PropTypes.bool,
};
