// why import React from 'react'?
// after Babel transforms your code (which is written with JSX elements), into the React.createElement calls, you can see where React is used (transforming a return into return React.createElement, for example)
// if you don't import React, it'll be undefined and the createElement call fails
import React from 'react';

// ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page (like render())
import ReactDOM from 'react-dom';

// import basic homepage styling from the css file
import './index.css';

// App contains the Main container, which in turn hosts routes and numerous important components
import App from './App';

// allows us to configure routes that show only the components (vs ALL components at once) we specify on the page, depending on the route
import { BrowserRouter as Router} from 'react-router-dom';

// Redux store setup below

// any component that we wrap in Provider will have access to our Redux store
import { Provider } from 'react-redux';

// import createStore: sets up our store
// add compose to combine middlewares - so we only pass in 1 vs multiple
import { createStore, applyMiddleware, compose } from 'redux';

// with a plain basic Redux store, you can only do simple synchronous updates by dispatching an action
// middleware extend the store's abilities, and lets you write async logic that interacts with the store
// middleware for synchronous logic that needs access to teh store and simple async logic (AJAX requests)
import thunk from 'redux-thunk';

// every time we update something in our store, these reducers return our updated state
import rootReducer from './reducers/index';

// explicitly connect to our devtools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose;

// create the store
// when we update something in store, this reducer returns updated state
// anytime something is dispatched, we want THAT action object to be sent to this reducer, which will update the store
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

// we’ll send an action object to our reducer
// reducer takes in action object and decides what we want to do update about our current store
// reducer returns new version of that store