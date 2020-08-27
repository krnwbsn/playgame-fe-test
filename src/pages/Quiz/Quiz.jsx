import React from 'react';
import { Layout } from '../../components';
import { makeStyles } from '@material-ui/core';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';
import listQuiz from '../../data/listQuiz';

const useStyles = makeStyles(() => ({
  img: {
    width: '50%',
    height: 'auto',
    '@media (min-width: 576px)': {
      width: '30%',
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
  footer: {
    marginTop: 'auto',
    flexShrink: 0,
    marginBottom: 100,
  },
  quizImage: {
    width: 240,
    margin: 20,
    '@media (max-width: 576px)': {
      width: 100,
    },
  },
  quizBox: {
    display: 'block',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
    width: '80%'
  },
  bg: {
    height: '100vh'
  }
}));

const Quiz = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Layout className={classes.bg} head={<p className={classes.text}>Pilih Level</p>}>
      <div className={classes.quizBox}>
        {listQuiz.map((item) => (
          <img
            className={classes.quizImage}
            src={item.poster}
            alt={item.text}
            key={item.id}
            onClick={() => history.push(`/quiz/${item.id}`)}
          />
        ))}
      </div>
      <div className={classes.footer}>
        <img className={classes.img} src={logo} alt="logo" />
      </div>
    </Layout>
  );
};

export default Quiz;
