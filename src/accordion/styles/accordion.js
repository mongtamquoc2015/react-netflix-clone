import React, { useState } from 'react'

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

Accordion.Title = function JumbotronTitle({ children, ...restProps }) {
	return (
		<Title {...restProps}>
			{children}
		</Title>
	);
}

Accordion.Frame = function JumbotronFrame({ children, ...restProps }) {
	return (
		<Frame >
			{children}
		</Frame>
	);
}

Accordion.Item = function JumbotronItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<Item {...restProps}>
			{children}
		</Item>
	);
}

Accordion.Header = function JumbotronHeader({ children, ...restProps }) {
	return (
		<Header {...restProps}
			onClick={() => setToggle()}
		>
			{children}
		</Header>
	);
}