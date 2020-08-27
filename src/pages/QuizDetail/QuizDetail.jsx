import React, { useState, useEffect } from 'react';
import { Layout } from '../../components';
import frame from '../../assets/score_frame.png';
import { makeStyles } from '@material-ui/core';
import listQuiz from '../../data/listQuiz';
import puzzle from '../../data/puzzle';
import { useParams } from 'react-router-dom';
import button from '../../assets/button_blue.png';
import { useHistory } from 'react-router-dom';

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
  quizImage: {
    width: '25%',
    '@media (max-width: 576px)': {
      width: '48%',
    },
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
    backgroundColor: '#fa8072',
    borderRadius: 12,
    margin: '20px auto 20px auto',
    paddingTop: 2,
    '@media (max-width: 576px)': {
      width: '60%',
    },
  },
  alertText: {
    color: '#7c0a02',
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
}));

const QuizDetail = () => {
  const history = useHistory();
  const classes = useStyles();
  let { id } = useParams();
  const [answer, setAnswer] = useState('');
  const [right, setRight] = useState(true);
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');
  let result = [];

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('result'));
    newData.map((item) => {
      return [setScore(item.score), setName(item.name)];
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    puzzle
      .filter((x) => x.Question === id)
      .map((item) => {
        if (answer.toLowerCase() !== item.Answer.toLowerCase()) {
          return setRight(false);
        }
        return [
          setScore(score + 10),
          result.push({ name: name, score: score + 10 }),
          localStorage.setItem('result', JSON.stringify(result)),
          history.push('/next'),
        ];
      });
  };

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <Layout
      head={
        <div className={classes.frameContainer}>
          <img className={classes.scoreFrame} src={frame} alt="score-frame" />
          <p className={classes.scoreAmount}>{score}</p>
        </div>
      }
    >
      <div className={classes.container}>
        <div className={classes.quizBox}>
          {listQuiz
            .filter((x) => x.id === id)
            .map((item) => (
              <img
                className={classes.quizImage}
                src={item.poster}
                alt={item.text}
                key={item.id}
              />
            ))}
        </div>
        <input
          className={classes.field}
          type="text"
          placeholder="Jawaban"
          onChange={handleChange}
        />
        {right ? null : (
          <div className={classes.alertBox}>
            <p className={classes.alertText}>
              <strong>Oops!</strong> Jawaban anda salah...
            </p>
          </div>
        )}
        <div className={classes.buttonContainer} onClick={handleSubmit}>
          <img className={classes.button} src={button} alt="button" />
          <h1 className={classes.buttonText}>SUBMIT</h1>
        </div>
      </div>
    </Layout>
  );
};

export default QuizDetail;
