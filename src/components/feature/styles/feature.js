import styled from 'styled-components/macro';

export const Title = styled.h1`
	color: white;
	max-width: 640px;
	font-weight: 500;
	font-size: 50px;
	margin: auto;
	
	@media(max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	color: white;
	max-width: 640px;
	font-weight: normal;
	font-size: 26px;
	margin: 16px auto;
	
	@media(max-width: 600px) {
		font-size: 18px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 165px 45px;
`;