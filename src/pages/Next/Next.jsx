import React, { useState, useEffect } from 'react';
import { Layout } from '../../components';
import frame from '../../assets/score_frame.png';
import { makeStyles } from '@material-ui/core';
import button from '../../assets/button_blue.png';
import { useHistory } from 'react-router-dom';
import tini from '../../assets/tini_happy.png';

const useStyles = makeStyles(() => ({
  scoreFrame: {
    height: '100%',
    width: 120,
    marginTop: 8,
  },
  frameContainer: {
    display: 'relative',
    textAlign: 'center',
  },
  scoreAmount: {
    position: 'absolute',
    left: '50%',
    top: '-25px',
    color: '#fff',
    fontSize: 32,
    fontWeight: 600,
  },
  quizBox: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 20,
  },
  container: {
    height: '93.8vh',
    '@media (max-width: 576px)': {
      height: '91.8vh',
    },
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
  alertBox: {
    width: '25%',
    height: 56,
    backgroundColor: '#a0e989',
    borderRadius: 12,
    margin: '20px auto 20px auto',
    paddingTop: 2,
    '@media (max-width: 576px)': {
      width: '60%',
    },
  },
  alertText: {
    color: '#337b24',
    fontSize: 16,
  },
  button: {
    width: '20%',
    marginBottom: 20,
    padding: 20,
    display: 'relative',
    '@media (max-width: 576px)': {
      width: '60%',
    },
  },
  buttonText: {
    position: 'absolute',
    top: 10,
    width: '100%',
    color: '#fff',
    fontSize: 64,
    fontWeight: 600,
    '@media (max-width: 576px)': {
      fontSize: 42,
    },
    '@media (max-width: 1365px)': {
      fontSize: 48,
    },
  },
  buttonContainer: {
    position: 'fixed',
    cursor: 'pointer',
    marginTop: 'auto',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  tini: {
    width: '50%'
  }
}));

const Next = () => {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('result'));
    newData.map((item) => {
      return [setScore(item.score), setName(item.name)];
    });
  }, []);

  const handleSubmit = () => {
    history.push('/quiz');
  };

  return (
    <Layout
      head={
        <div className={classes.frameContainer}>
          <img className={classes.scoreFrame} src={frame} alt="score-frame" />
          <p key={name} className={classes.scoreAmount}>{score}</p>
        </div>
      }
    >
      <div className={classes.container}>
        <div className={classes.quizBox}>
          <img className={classes.tini} src={tini} alt="tini" />
        </div>
        <div className={classes.alertBox}>
          <p className={classes.alertText}>
            <strong>Selamat!</strong> Jawaban anda benar...
          </p>
        </div>
        <div className={classes.buttonContainer} onClick={handleSubmit}>
          <img className={classes.button} src={button} alt="button" />
          <h1 className={classes.buttonText}>NEXT</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Next;
