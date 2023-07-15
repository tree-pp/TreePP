import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export default function WhatIsTreePP() {
	return (
		<Container style={{ backgroundColor: '#dfffdf' }}>
			<Typography variant='h4' gutterBottom align='center' paddingTop={'20px'}>
				What is Tree++
			</Typography>
			<p>
				Tree++ is a digital platform that connects the dots in tree plantation
				to address climate change through the implementation of carbon
				offsetting initiatives. The platform makes it easier for everyone to
				plant trees by rightly identifying the stakeholders and activities while
				planting trees and connecting them all together in a cohesive manner.
				Furthermore, the platform has built-in monitoring mechanisms to ensure
				that the planted trees are tracked and cared for until maturity,
				ensuring that the carbon offsetting efforts are sustainable and
				effective
			</p>
			<p>
				The platform independent of fresh fund/donation, it becomes
				self-sustainable once sufficient stakeholders join the platform to its
				journey towards reducing the carbon footprint and achieving net zero and
				beyond!
			</p>
		</Container>
	);
}
