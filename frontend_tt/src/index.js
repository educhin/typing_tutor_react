import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux'
import store from  './app/store'
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
import App from './containers/App';
import './index.css';

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
)
