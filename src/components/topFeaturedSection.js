import Image from 'next/image';
import * as React from 'react';
import styles from '../styles/TopFeaturedSection.module.css';

export default function TopFeaturedSection() {
	return (
		<Image className={styles.image} src={'/banner.png'} fill unoptimized />
	);
}
