import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  footer: {
      backgroundColor: theme.palette.common.black,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
      }
  },
  fill: {
    backgroundColor: theme.palette.common.black,
  },
  items: {
    color: theme.palette.common.white
  },
  title: {
    color: theme.palette.common.white
  }

}));
const footers = [
  {
    title: 'Company',
    description: ['Members', 'History', 'About Us', 'Locations'],
  },
  {
    title: 'Activities',
    description: ['Engineering', 'Consulting', 'Deployment', 'Research', 'Lobbying'],
  },
  {
    title: 'Resources',
    description: ['Press Releases', 'Financial', 'Technical', 'Archives'],
  },
  {
    title: 'Misc',
    description: ['Privacy Policy', 'Terms Of Use', 'Contact Us'],
  },
];


export default function Footer () {
  const classes = useStyles();
    return (
      <div className={classes.fill}>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" className={classes.title} gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map(item => (
                    <li key={item}>
                      <Link href="#" className={classes.items} variant="subtitle1">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>

          </Box>
      </Container>
    </div>
    )
}

