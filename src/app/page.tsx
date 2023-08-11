import * as React from 'react';
import { Metadata } from 'next'

import styles from '../styles/Home.module.css';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';
import Activities from '../components/Activities';
import OurTeam from '@/components/OurTeam';
import OurGoals from '@/components/OurGoals';

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

export const metadata: Metadata = {
    title: 'My Page Title',
  }

export default function Home() {
	return (
		<div className={styles.bgimg} style={{ backgroundColor: 'white' }}>
			<Head>
				<title>
					Tree++ | Digital Carbon Offsetting through Tree Plantation
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head> */

			{/* <TheaameProvider theme={theme}> */}

			{/* <Header title="Tree++" pages={sections} /> */}
			<div>
				<main>
					{/* <TopFeaturedSection /> */}
					{/* <WhatIsTreePP /> */}
					<WhoWeAre />
					<WhatWeDo />
					<HowItWorks />
					<Activities />
					<OurGoals />
					<OurTeam />
				</main>
			</div>

			{/* </ThemeProvider> */}
		</div>
	);
}
