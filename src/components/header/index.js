import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import {
	Container,
	ButtonLink,
	Logo,
	Background,
	Feature,
	Text,
	FeatureCallOut,
	Link,
	Group,
	Picture,
	Profile,
	Dropdown,
	Search,
	SearchIcon,
	SearchInput
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
}

Header.TextLink = function HeaderText({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
}

Header.Picture = function ProfilesPicture({ children, ...restProps }) {
	return <Picture {...restProps}>{children}</Picture>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReachRouterLink to={to}>
			<Logo {...restProps} />
		</ReachRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Search = function HeaderSearch({ searchTerm, clicked, changed, searchActive, ...restProps }) {
	return (
		<Search {...restProps}>
			<SearchIcon onClick={clicked}>
				<img src="/images/icons/search.png" alt="Search" />
			</SearchIcon>
			<SearchInput value={searchTerm} onClick={changed} placeholder="Search films and series" active={searchActive} />
		</Search>
	);
}