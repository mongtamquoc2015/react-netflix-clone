import React from 'react';

import { useContent } from '../hooks';

export default function Browse() {
	// We need the siries and films
	const { series } = useContent('series');
	console.log(series);
	const { films } = useContent('films');
	console.log(films);
	// We need slides 

	// pass it to browse contianer
	return (
		<div>
			Hello from browse!
		</div>
	)
}