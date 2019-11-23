import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image1 from './../../img/partner.png';
import Image2 from './../../img/partner2.png';
import Image3 from './../../img/partner3.png';
import Image4 from './../../img/partner4.png';
import Image5 from './../../img/partner5.png';
import Image6 from './../../img/partner6.png';
import Image7 from './../../img/partner7.png';
import Image8 from './../../img/partner8.png';


const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  container: {
    margin: '40px 20px 40px 20px',
    width: '20%',
  },
  url: {
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    
  }

}));

const tiles = [
  {
    title: 'IISD',
    img: Image1,
    url: 'http://sdg.iisd.org/'
  },
  {
    title: 'CBC',
    img: Image2,
    url: 'https://cbc.radio-canada.ca/'
  },
  {
    title: 'Canada Helps',
    img: Image3,
    url: 'https://www.canadahelps.org/en/'
  },
  {
    title: 'Universities Canada',
    img: Image4,
    url: 'https://www.univcan.ca/'

  },
  {
    title: 'Ontario',
    img: Image5,
    url: 'https://www.ontario.ca/'
  },
  {
    title: 'BANFF',
    img: Image6,
    url: 'https://www.banffcentre.ca/'
  },
  {
    title: 'CCIC',
    img: Image7,
    url: 'https://ccic.ca/'
  },
  {
    title: 'The Match International Women\'s Fund',
    img: Image8,
    url: 'https://matchinternational.org/'
  },
];

export default function Partners() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Partners
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
          {tiles.map(tile => (
            <div className={classes.container}>
              <a className={classes.url} href={tile.url}>
                <img className={classes.img} src={tile.img} alt={tile.title} />
              </a>
            </div>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}