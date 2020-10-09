import React, { useState, useContext, createContext } from 'react'
import { Container, Frame, Header, Body, Item, Inner, Title } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
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
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
}

Accordion.Header = function JumbotronHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		<Header
			onClick={() => setToggleShow(!toggleShow)}
			{...restProps}
		>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="Close" />
			) : (
					<img src="/images/icons/add.png" alt="Add" />
				)
			}
		</Header>
	);
}

Accordion.Body = function JumbotronBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);
	return toggleShow && (
		<Body {...restProps}>
			{children}
		</Body>
	)
}