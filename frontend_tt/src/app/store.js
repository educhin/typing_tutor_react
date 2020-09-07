import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../components/test/quoteSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
  },
});