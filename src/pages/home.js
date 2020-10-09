import React from 'react';

import JumBotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';

function Home() {
	return (
		<>
			<JumBotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	)
}

export default Home
