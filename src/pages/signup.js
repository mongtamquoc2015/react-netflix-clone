import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FooterContainer, HeaderContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
	const { firebase } = useContext(FirebaseContext);
	const history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = firstName === '' || password === '' || emailAddress === '';

	const handleSignup = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAddress, password)
			.then((result) => {
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1
					});
			})
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch(err => {
				setFirstName('');
				setEmailAddress('');
				setPassword('');
				setError(err.message);
			});
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="First name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
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
							Sign up
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						Already a user?
						<Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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