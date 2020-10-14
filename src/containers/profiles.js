import React from 'react';

import { Profiles, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ user, setProfile }) {

	const handleOnProfileChange = () => {
		setProfile({
			displayName: user.displayName,
			photoURL: user.photoURL
		});
	}

	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
				</Header.Frame>
			</Header>

			<Profiles onClick={handleOnProfileChange}>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User onClick={null}>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
}