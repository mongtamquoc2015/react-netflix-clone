import React from 'react';

import {
	JumbotronContainer,
	FaqsContainer,
	FooterContainer,
	HeaderContainer,
} from '../containers';
import { Feature } from '../components';

function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Unlimited films, TV programes and more.
					</Feature.Title>
					<Feature.SubTitle>
						Watch anywhere. Cancel at any time.
					</Feature.SubTitle>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	)
}

export default Home
