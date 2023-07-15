import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export default function HowItWorks() {
	return (
		<Container style={{ backgroundColor: '#edf2ff' }}>
			<Typography variant='h4' gutterBottom align='center' paddingTop={'10px'}>
				How Tree++ Works
			</Typography>
			<p>
				The objective of Tree++ is to play an instrumental role in achieving net
				zero. Doing so it primarily offers carbon offsetting through tree
				plantation.
			</p>
			<p>
				In its digital platform any individual can calculate his carbon
				footprint and may purchase carbon offset accordingly. In the same
				platform the land owners who have unused plantation-ready lands may
				enlist them. Tree++ brings the unique opportunity to the youth segment
				to join the green movement to address global climate change by offering
				hands-on efforts and get incentivised for their effort at the same time.
				For corporations of any size Tree++ is the best place to offset their
				carbon emission.
			</p>
			<p>
				Thus, this novel platform connects all the stakeholders involved in
				carbon offsetting through tree plantation in a win-win-win manner.
			</p>
		</Container>
	);
}
