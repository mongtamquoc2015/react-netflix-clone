import React, { useState, useContext, createContext } from 'react';

import {
	Container, Title, SubTitle, Group, Text,
	Item, Meta, Feature, FeatureText, FeatureClose,
	Maturity, Content, Entities, Image, FeatureTitle
} from './styles/card';
import { transformTitle } from '../../utils';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
	const [showFeature, setShowFeature] = useState(false);
	const [itemFeature, setItemFeature] = useState({});
	return (
		<FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	)
}

Card.Group = function CardGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
}

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
}

Card.Text = function CardText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
}

Card.Meta = function CardMeta({ children, ...restProps }) {
	return <Meta {...restProps}>{children}</Meta>;
}

Card.Item = function CardItem({ item, children, ...restProps }) {
	const { setItemFeature, setShowFeature } = useContext(FeatureContext);

	const handleOnItemClick = () => {
		setShowFeature(true);
		setItemFeature(item);
	}

	return (
		<Item
			{...restProps}
			onClick={handleOnItemClick}
		>
			{children}
		</Item>
	);
}

Card.Image = function CardImage({ ...restProps }) {
	return <Image {...restProps} />
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {
	const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
	return showFeature && (
		<Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
			<Content>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<img src="/images/icons/close.png" alt="Close" />
				</FeatureClose>
			</Content>

			<Group margin="30px 0" flexDirection="row" alignItems="center">
				<Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
				<FeatureText fontWeight="bold">
					{transformTitle(itemFeature.genre)}
				</FeatureText>
			</Group>
		</Feature>
	);
}

Card.FeatureText = function CardFeatureText({ children, ...restProps }) {
	return <FeatureText {...restProps}>{children}</FeatureText>
}

Card.FeatureClose = function CardFeatureClose({ children, ...restProps }) {
	return <FeatureClose {...restProps}>{children}</FeatureClose>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
	return <Entities {...restProps}>{children}</Entities>
}

Card.Maturity = function CardMaturity({ children, ...restProps }) {
	return <Maturity {...restProps}>{children}</Maturity>
}

Card.Content = function CardContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>
}