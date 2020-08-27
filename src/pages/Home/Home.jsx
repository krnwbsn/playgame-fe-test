import React from 'react';
import logo from '../../assets/logo.png';
import { makeStyles } from '@material-ui/core';
import { Layout } from '../../components';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  img: {
    width: '30%',
    height: 'auto',
    '@media (max-width: 576px)': {
      width: '50%',
    },
  },
  text: {
    marginTop: 0,
    textAlign: 'center',
    paddingTop: 5,
    color: '#fff',
    fontSize: '2.5em',
    fontWeight: 600,
  },
  form: {
    paddingTop: 150,
    paddingBottom: 150,
  },
  field: {
    '&:focus': {
      outline: 'none !important',
    },
    border: '2px solid #ff6600',
    borderRadius: 15,
    height: 56,
    width: '25%',
    '@media (max-width: 576px)': {
      width: '60%',
    },
  },
  footer: {
    marginTop: 'auto',
    flexShrink: 0,
  },
  container: {
    height: '93.8vh',
    '@media (max-width: 576px)': {
      height: '91.8vh',
    },
  },
}));

const Home = ({ dispatch }) => {
  const history = useHistory();
  const classes = useStyles();
  let input;
  let result = [];

  return (
    <Layout head={<p className={classes.text}>Masukan Nama Anda</p>}>
      <div className={classes.container}>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            result.push({
              name: input.value,
              score: 0,
            });
            localStorage.setItem('result', JSON.stringify(result));
            input.value = '';
            history.push('/quiz');
          }}
        >
          <input
            className={classes.field}
            type="text"
            placeholder="Username"
            ref={(node) => (input = node)}
          />
        </form>
        <div className={classes.footer}>
          <img className={classes.img} src={logo} alt="logo" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
