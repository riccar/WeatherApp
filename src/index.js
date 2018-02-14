import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//Hooking up redux-promise middleware into the application
//The middleware will check whether the action has a promise 
//as a payload, if it doesn't it let the action to go through to all the reducers
//If it does, it stops the action until the promise is resolved 
//then it creates a new action and sends it to all the reducers
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
