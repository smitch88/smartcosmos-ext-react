import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRedirect, Redirect, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores';
import App from './containers/App';
import Home from './containers/Home';
import Objects from './containers/Objects';
import Relationships from './containers/Relationships';
import NotFound from './containers/NotFound';

// Add in css
require('normalize.css/normalize.css');
require('styles/app.scss');

// Configure centralized data store
const store = configureStore();

// Create enhanaced history to place in store
const history = syncHistoryWithStore( browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home"/>
        <Route path="home" component={Home}/>
        <Route path="objects" component={Objects}/>
        <Route path="relationships" component={Relationships}/>
      </Route>
      <Route path="/error" component={NotFound} />
      <Redirect from="*" to="/error" />
    </Router>
  </Provider>,
  document.getElementById('app')
);
