import React from 'react';

import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';

export default function FaqsContainer({ children, ...restProps }) {
	return (
		<Accordion {...restProps}>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map(item => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	)
}