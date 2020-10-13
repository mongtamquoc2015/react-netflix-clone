import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes.js';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes.js';
import { Home, Browse, Signup, Signin } from './pages';

export default function App() {
	const user = null;
	return (
		<Router>
			<Switch>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
					<Signin />
				</IsUserRedirect>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
					<Signup />
				</IsUserRedirect>
				<ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect user={user} exact path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE}>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}