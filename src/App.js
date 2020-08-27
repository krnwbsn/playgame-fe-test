import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useHistory,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import tini from './assets/tini_happy.png';
import { Home, Quiz, QuizDetail, Next } from './utils';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
});

const useStyles = makeStyles((theme) => ({
  loading: {
    width: '50%',
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  },
}));

const App = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense
          fallback={<img className={classes.loading} src={tini} alt="logo" />}
        >
          <Switch>
            <Route render={() => <Home />} exact path="/" />
            <Route render={() => <Quiz />} exact path="/quiz" />
            <Route render={() => <QuizDetail />} exact path="/quiz/:id" />
            <Route render={() => <Next />} exact path="/next" />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
