const reduxRouter = require('react-router-redux');
const redux = require('redux');
const reducers = require('../reducers');

/*
*
* Single application store - Could be an in-memory sql impl like loki
* could be a datalog database like datascript, an immutable map w/ ImmutableJS
* or even just a plain js dictionary
*
*/

const initialApplicationState = {
  version: '3.0.0'
};

function application(state = initialApplicationState, action) {
  return state;
}

const initialSessionState = {
  token: 'abcdefghijklmnopqrstuvwxyz123456789'
};

function session(state = initialSessionState, action) {
  return state;
}

module.exports = function(initialState) {

  // create centralized data store
  const store = redux.createStore(
    redux.combineReducers({
      ...reducers,
      routing: reduxRouter.routerReducer,
      application: application,
      session: session
    }),
    initialState
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}
