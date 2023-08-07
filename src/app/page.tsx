import * as React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';
import Activities from '../components/Activities';

// const theme = createTheme();
// const sections = [
//   { title: "What is Tree++", url: "#" },
//   { title: "How it Works", url: "#" },
//   { title: "Recent Activities", url: "#" },
//   { title: "Contribute", url: "#" },
//   { title: "Team", url: "#" },
//   { title: "Donors", url: "#" },
//   { title: "Partners", url: "#" },
// ];

export default function Home() {
	return (
		<div className={styles.bgimg} style={{ backgroundColor: '#f8f1e6' }}>
			<Head>
				<title>
					Tree++ | Digital Carbon Offsetting through Tree Plantation
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* <ThemeProvider theme={theme}> */}

			{/* <Header title="Tree++" pages={sections} /> */}
			<div>
				<main>
					{/* <TopFeaturedSection /> */}
					{/* <WhatIsTreePP /> */}
					<WhoWeAre />
					<WhatWeDo />
					<HowItWorks />
					<Activities />
				</main>
			</div>

			{/* </ThemeProvider> */}
		</div>
	);
}
