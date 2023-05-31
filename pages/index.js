import Head from 'next/head';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import styles from '../styles/Home.module.css';

export default function Home() {
	console.log('version - 1.0.1');
	return (
		<div className={styles.bgimg}>
			<Head>
				<title>
					Tree++ | Digital Carbon Offsetting through Tree Plantation
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.topleft}>
				<p>Tree++</p>
			</div>
			<div
				className={styles.middle}
				style={{ 'background-color': 'hsl(0, 0%, 0%, 0.35)' }}
			>
				<h1>A technology enabled carbon offsetting plaform is COMING SOON</h1>
				<hr />
				<div>
					<FacebookIcon
						className={styles.icons}
						fontSize='large'
						onClick={() => {
							window
								.open('https://www.facebook.com/treepp.org', '_blank')
								.focus();
						}}
					/>
					<LinkedInIcon
						className={styles.icons}
						fontSize='large'
						onClick={() => {
							window
								.open('https://linkedin.com/company/tree-pp', '_blank')
								.focus();
						}}
					/>
					<GitHubIcon
						className={styles.icons}
						fontSize='large'
						onClick={() => {
							window.open('https://github.com/tree-pp', '_blank').focus();
						}}
					/>
					<VolunteerActivismIcon
						className={styles.icons}
						fontSize='large'
						onClick={() => {
							window
								.open('https://opencollective.com/tree-pp', '_blank')
								.focus();
						}}
					/>
				</div>
			</div>
			<div className={styles.bottomleft}>
				<p>hi@treepp.org</p>
			</div>
		</div>
	);
}
