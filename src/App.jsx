import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { StoreStorage } from './contexts/StoreContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Error404 from './pages/404';

export default function App() {
	return (
		<StoreStorage>
			<Router>
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/posts" render={() => <Posts />} />
				<Route exact path="/post/:slug/:slug" render={() => <Post />} />
				<Route exact path="/login" render={() => <Login />} />
				<Route exact path="/register" render={() => <Register />} />
				{/* <Route path="*" render={() => <Error404 />} /> */}
			</Router>
		</StoreStorage>
	);
}
