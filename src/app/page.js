import * as React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import {
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme
} from '@mui/material';
import TopFeaturedSection from '../components/topFeaturedSection';
import Header from '../components/header';
import Footer from '../components/footer';
import WhatIsTreePP from '../components/whatIsTreePP';
import HowItWorks from '../components/howItWorks';
import RecentWorks from '../components/recentWorks';
import GetInvolved from '../components/getInvolved';
import Team from '../components/team';

// const theme = createTheme();
const sections = [
	{ title: 'What is Tree++', url: '#' },
	{ title: 'How it Works', url: '#' },
	{ title: 'Recent Activities', url: '#' },
	{ title: 'Contribute', url: '#' },
	{ title: 'Team', url: '#' },
	{ title: 'Donors', url: '#' },
	{ title: 'Partners', url: '#' }
];

export default function Home() {
	console.log('version - 1.0.1');
	return (
		<div className={styles.bgimg} style={{ backgroundColor: '#f8f1e6' }}>
			<Head>
				<title>
					Tree++ | Digital Carbon Offsetting through Tree Plantation
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header title='Tree++' pages={sections} />
				<Container maxWidth='lg'>
					<main>
						<TopFeaturedSection />
						<WhatIsTreePP />
						<HowItWorks />
						<RecentWorks />
						<GetInvolved />
						<Team />
					</main>
				</Container>
				<Footer
					title='Footer'
					description='Something here to give the footer a purpose!'
				/>
			</ThemeProvider>
		</div>
	);
}
