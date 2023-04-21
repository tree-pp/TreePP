import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import styles from '../../components/layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import {
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme
} from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Footer from '../../components/footer';


import {
  responsiveFontSizes
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const itemData = [
  {
    img: '/images/tree_image1.jpg',
    title: 'tree',
  },
  {
    img: '/images/tree_image2.jpg',
    title: 'tree',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function StandardImageList() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );

  // return (
  //   <ImageList sx={{ width: 700, height: 200 }
  //   } cols={3} rowHeight={200} >
  //     {
  //       itemData.map((item) => (
  //         <ImageListItem key={item.img} >
  //           <img
  //             src={`${item.img}?w=250&h=200&fit=crop&auto=format`}
  //             srcSet={`${item.img}?w=250&h=200&fit=crop&auto=format&dpr=2 2x`}
  //             alt={item.title}
  //             loading="lazy"
  //           />
  //         </ImageListItem>
  //       ))}
  //   </ImageList>
  // );
}

function Logo() {
  return (
    <React.Fragment>
      <Grid item xs={8} >
        <Item>
          <div
            style={
              {
                display: "flex",
                justifyContent: "center",
              }
            }
          > <Image
              priority
              src="/images/logo.png"
              className={utilStyles.borderCircle}
              height={144}
              width={500}
              alt="Tree++"
            />
          </div></Item >
      </Grid>
    </React.Fragment>
  )
}

function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }
    }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/images/tree_image1.jpg"
          alt=""
        />
        {/*<CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
  </CardContent>*/}
      </CardActionArea>
    </Card>
  );
}


export default function AutoGrid() {
  return (
  <div>
    <ThemeProvider theme={theme}>
				<CssBaseline />
    <Box sx={{ flexGrow: 1 }
    }>
      <Logo></Logo>
      <Grid container spacing={3} >
        <Grid item xs >
          {/*<Item>xs</Item>*/}
        </Grid>
        < Grid item xs={6} >
          <Item>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start" >
                <ThemeProvider theme={theme}>
                  {/* <ListItemText
                  //primary="Tree Details"
                  
                /> */}
                  < Typography variant="h5" > Tree Details </Typography>
                </ThemeProvider>
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >
                <ListItemText
                  primary="Tree ID: t-000182"
                /*secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }*/
                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Tree species: Mahogani"

                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Plantation date: 24 June, 2020"

                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Donor: Mostafiz Rahman"

                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Land owner: Yusuf Ali"

                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Location: Gilatala, Khulna"

                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Land type: Household yard"

                />
              </ListItem>
              < Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Map pin: 22.922086 N, 89.506178 E"

                />
              </ListItem>

              < ListItem alignItems="flex-start" >

                <ListItemText
                  primary="Recent photos:"
                  secondary={
                    // <ActionAreaCard ></ActionAreaCard>
                    < StandardImageList > </StandardImageList>
                  }
                />
              </ListItem>

            </List>
          </Item>
        </Grid>
        < Grid item xs >
          {/*<Item>xs</Item>*/}
        </Grid>
      </Grid>
    </Box>
    <Footer
					title='Footer'
					description='Something here to give the footer a purpose!'
				/>
        </ThemeProvider>
    </div>
  );
}


