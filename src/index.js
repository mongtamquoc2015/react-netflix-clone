import React from 'react';
import { render } from 'react-dom';

import App from './app.js';
import { GlobalStyles } from './global-styles';

render((
	<>
		<GlobalStyles />
		<App />
	</>
), document.getElementById('root'));