import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../components/test/quoteSlice';
import scoresReducer from '../components/scores/scoresSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
    scores: scoresReducer
  }
});