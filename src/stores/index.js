import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

/*
* These reducers can be moved into the reducer folder for cleaner seperation
*/

/*
* Application reducer
*/
const initialApplicationState = {
  version: '3.0.0'
};

function application(state = initialApplicationState, action) {
  return state;
}

/*
* Session reducer
*/

const initialSessionState = {
  token: 'abcdefghijklmnopqrstuvwxyz123456789'
};

function session(state = initialSessionState, action) {
  return state;
}

/*
* Objects reducer
*/

const initialObjectsState = {
  objects: [],
  selected: null
};

function objects(state = initialObjectsState, action) {

  switch (action.type) {

    case 'LOAD_OBJECTS_SUCCESS':
      return Object.assign({}, state, {
        objects: action.objects,
        isLoading: false
      });

    case 'LOAD_OBJECTS_ERROR':
      return Object.assign({}, state, {
        objects: [],
        error: '500 - Server Error',
        isLoading: false
      });

    case 'SET_LOADING':
      return Object.assign({}, state, {isLoading: action.isLoading});

    case 'SET_SELECTED':
      return Object.assign({}, state, {selected: action.id});

    default:
      return state;

  }

}

/*
*
* Single application store - Could be an in-memory sql impl like loki
* could be a datalog database like datascript, an immutable map w/ ImmutableJS
* or even just a plain js dictionary
*
*/


module.exports = function(initialState) {

  // create centralized data store
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
      application: application,
      session: session,
      objects: objects
    }),
    initialState,
    applyMiddleware( thunk )
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
