import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`};
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const Picture = styled.button`
	background: url( ${({ src }) => src ? `/images/users/${src}.png` : `/images/misc/loading.fig`});
	background-size: contain;
	border: 0;
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

export const Link = styled.a`
	color: white;
	width: 100px;
	text-decoration: none;
	margin-right: 30px;
	font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};

	cursor: pointer;
	font-size: 12px;

	&:hover{
	font-weight: bold;
}

	&:last-of-type {
	margin-right: 0;
}
`;

export const Dropdown = styled.div`
	display: none;
	background-color: black;
	position: absolute;
	padding: 10px;
	width: 100px;

	top: 32px;
	right: 10px;

	${Group}:first-of-type {
		margin-bottom: 10px;

		${Link},${Picture} {
			cursor: default;
		}
	}

	button {
		margin-right: 10px
	}

	p {
		font-size: 12px;
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	button {
		cursor: pointer;
	}

	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}
`;

export const FeatureCallOut = styled.h2`
color: white;
font-size: 50px;
line-height: bold;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
margin: 0;
margin-bottom: 20px;
`;

export const Text = styled.p`
color: white;
font-size: 22px;
line-height: normal;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;


export const Logo = styled.img`
height: 32px;
width: 102px;
margin-right: 40px;

@media(min-width: 1449px) {
	height: 45px;
	width: 167px;
}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	background-color: #e50914;
	width: 84px;
	height: fit-content;
	color: white;

	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;

	text-decoration: none;
	box-sizing: border-box;

	&:hover {
	background-color: #f40612;
	}
`;