import Head from 'next/head';
import styles from '../styles/Home.module.css';
import bg from '../public/forest.jpg';

export default function Home() {
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
				<p id='demo' style={{ 'font-size': '30px' }}></p>
			</div>
			<div className={styles.bottomleft}>
				<p>hi@treepp.org</p>
			</div>
		</div>
	);
}
