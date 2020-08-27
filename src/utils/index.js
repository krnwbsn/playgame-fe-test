import { lazy } from 'react';

export const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../pages/Home')), 500);
  });
});

export const Quiz = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../pages/Quiz')), 500);
  });
});

export const QuizDetail = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../pages/QuizDetail')), 500);
  });
});

export const Next = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../pages/Next')), 500);
  });
});