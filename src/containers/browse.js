import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';

import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header, Card, Player } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers';

export default function BrowseContainer({ slides }) {
	const [category, setCategory] = useState('series');
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchActive, setSearchActive] = useState(false);
	const [slideRows, setSlideRows] = useState([]);

	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	useEffect(() => {
		setSlideRows(slides[category]);
	}, [slides, category]);

	useEffect(() => {
		const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
		const results = fuse.search(searchTerm).map(({ item }) => item);

		console.log(`results`, results);

		if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
			setSlideRows(results);
		} else {
			setSlideRows(slides[category]);
		}
	}, [searchTerm]);

	const handleOnSignoutClick = () => {
		firebase.auth().signOut();
	}

	const handleOnSearchIconClick = () => {
		setSearchActive(!searchActive);
	}

	const handleOnSearchTermChange = ({ target }) => {
		setSearchTerm(target.value);
	}

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

			<Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo src={logo} to={ROUTES.BROWSE} alt="Netflix" />
						<Header.TextLink
							active={category === 'series' ? 'true' : 'false'}
							onClick={() => setCategory('series')}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === 'films' ? 'true' : 'false'}
							onClick={() => setCategory('films')}
						>
							Films
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							changed={handleOnSearchTermChange}
							clicked={handleOnSearchIconClick}
							searchActive={searchActive}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={handleOnSignoutClick}>Sign out</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker now</Header.FeatureCallOut>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
						City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
						futile attempt to feel like he's part of the world around him.
						</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>

			<Card.Group>
				{slideRows.map(slideItem => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map(item => (
								<Card.Item item={item} key={item.docId}>
									<Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src="/videos/bunny.mp4" />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
			<FooterContainer />
		</>
	) : (
			<SelectProfileContainer user={user} setProfile={setProfile} />
		)
}