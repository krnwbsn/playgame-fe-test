import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import bg from '../../assets/bg_pattern.png';
import header from '../../assets/header_pattern.png';

const useStyles = makeStyles(() => ({
  body: {
    background: `url(${bg})`,
    '-webkit-background-size': 'auto',
    '-moz-background-size': 'auto',
    '-o-background-size': 'auto',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    margin: 0,
  },
  header: {
    width: '100%',
    height: 60,
    background: `url(${header}) repeat`,
    backgroundSize: 60,
  },
  title: {
    textTransform: 'capitalize',
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.header}>{props.head}</div>
      <div className={classes.body}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
