import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

// set up Redux store
import { Provider } from 'react-redux';
// we add compose here to combine middlewares - so we only pass in 1
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// not sure about this yet
// import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose;

// every time we update something in our store, this reducer below returns our updated state
// anytime something is dispatched, we want THAT action object to be sent to this reducer which will then update the store.
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

// give app access to the store
ReactDOM.render((   
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>), 
document.getElementById('root')
);

// We’ll send an action object to our reducer. Reducer takes in action object and decides what we want to do update about our current store. Reducer returns new version of that store.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// not sure yet
// serviceWorker.unregister();