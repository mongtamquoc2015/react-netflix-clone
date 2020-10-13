import React, { useState } from 'react';

import { FooterContainer, HeaderContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';

	const handleSignin = (e) => {
		e.preventDefault();

		// firebase work here
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{!error && <Form.Error>I am an error!</Form.Error>}

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