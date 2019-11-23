import React from 'react';
import TabbedForm from './../TabbedForm/TabbedForm';
import Prices from './../Prices/Prices';
import Partners from './../Partners/Partners';
import { makeStyles } from '@material-ui/core/styles';
import Image from './../../img/bg.jpg';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${Image})`,
    height: 960,
    marginTop: '-90px',
    display: 'flex',
  },
  font: {
    color: 'white',
  },
  button: {
    marginRight: '10px',
  },
  jumbotron: {
    paddingTop: '150px',
    width: '40%',
    marginLeft: '130px',
    textAlign: 'left',

  },
  ham: {
    backgroundColor: 'transparent',
    height: '150px',
    width: '100%',
    marginTop: '-190px',
  },
  lettuce: {
    height: 720,
  },
  cheese: {
    height: 720,
  }
});

export default function Body() {
    const classes = useStyles();

    return (
      <div>
        <div className={classes.wrapper}>

          <div className={classes.jumbotron}>
            <div className="container">
              <h1 className={classes.font}>BitGo</h1>
              <h3 className={classes.font}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3 className={classes.font}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
              <p className={classes.font}>Lorem ipsum dolor sit amet, consectetur...</p>
              <Button variant="contained" color="primary" className={classes.button}>
                Primary
              </Button>
              <Button variant="contained" color="secondary" className={classes.button}>
                Secondary
              </Button>
            </div>
          </div>

          <TabbedForm />          
        </div>
        <div>
          <svg viewBox="0 0 100 102" preserveAspectRatio="none" className={classes.ham}>
              <path fill="#ffffff" d="M0 0 L0 100 L100 100 L100 0 L50 80 Z"></path>
          </svg>
        </div>
        <div className={classes.lettuce}>
          <Prices />
        </div>
        <div className={classes.cheese}>
          <Partners />
        </div>
      </div>
    );
  
}
