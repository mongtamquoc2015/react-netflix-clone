import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes.js';
import { Home, Browse, Signup, Signin } from './pages';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Route exact path={ROUTES.BROWSE}>
					<Browse />
				</Route>
				<Route exact path={ROUTES.SIGN_IN}>
					<Signin />
				</Route>
				<Route exact path={ROUTES.SIGN_UP}>
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
}