import React from 'react';

import { HeaderContainer } from '../containers';
import { Profiles } from '../components';


export default function SelectProfileContainer({ user, setProfile }) {
	return (
		<>
			<HeaderContainer bg={false} />

			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User onClick={null}>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	)
}