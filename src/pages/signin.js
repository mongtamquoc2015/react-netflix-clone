import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FooterContainer, HeaderContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function Signin() {
	const { firebase } = useContext(FirebaseContext);
	const history = useHistory();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';

	const handleSignin = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch(err => {
				setEmailAddress('');
				setPassword('');
				setError(err.message);
			});
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email or phone number"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							placeholder="Password"
							type="password"
							autoComplete="off"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign in
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						New to Netflix?
						<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a bot.
					</Form.TextSmall>
				</Form>

			</HeaderContainer>
			<FooterContainer />
		</>
	)
}