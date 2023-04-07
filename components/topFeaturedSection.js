import { Container } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export default function TopFeaturedSection() {
	return (
		<Container>
			<Image
				src={'/banner.PNG'}
				width='500'
				height='200'
				// fill
			/>
		</Container>
	);
}
