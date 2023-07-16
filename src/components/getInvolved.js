import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export default function GetInvolved() {
	return (
		<Container style={{ backgroundColor: '#f4ffed' }}>
			<Typography variant='h4' gutterBottom align='center' paddingTop={'20px'}>
				Join the Green Movement
			</Typography>
			<p>
				Next steps In this quickstart, you deployed a Kubernetes cluster and
				then deployed a sample multi-container application to it. To learn more
				about AKS by walking through a complete example, including building an
				application, deploying from Azure Container Registry, updating a running
				application, and scaling and upgrading your cluster, continue to the
				Kubernetes cluster tutorial.
			</p>
		</Container>
	);
}
