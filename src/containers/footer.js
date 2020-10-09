import React from 'react';

import { Footer } from '../components';

function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Question? Contact use.</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link href="#FAQ">FAQ</Footer.Link>
					<Footer.Link href="#InvestorRelations">Investor Relations</Footer.Link>
					<Footer.Link href="#Privacy">Privacy</Footer.Link>
					<Footer.Link href="#Speed Test">Speed Test</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link href="#HelpCenter">Help Center</Footer.Link>
					<Footer.Link href="#Jobs">Jobs</Footer.Link>
					<Footer.Link href="#WCookiePreferences">Cookie Preferences</Footer.Link>
					<Footer.Link href="#Legal Notices">Legal Notices</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link href="#Account">Account</Footer.Link>
					<Footer.Link href="#Ways to Watch">Ways to Watch</Footer.Link>
					<Footer.Link href="#Corporate Information">Corporate Information</Footer.Link>
					<Footer.Link href="#Corporate Information">Netflix Originals</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link href="#MediaCenter">Media Center</Footer.Link>
					<Footer.Link href="#Terms of Use">Terms of Use</Footer.Link>
					<Footer.Link href="#Contact Us">Contact Us</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break />
			<Footer.Text>Netflix Vietnam</Footer.Text>
		</Footer>
	)
}

export default FooterContainer
