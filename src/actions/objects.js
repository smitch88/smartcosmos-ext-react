import { Databroker, mockObjects } from '../sources';

const brokerTimeout = 1000;

/*
*
* `fetchObjects` - thunk
*
* Async action handler that fetches objects from our fake data source and
* optimistically updates the UI to show loading
*
*/

const fetchObjects = function(){

  return function ( dispatch, getState ) {

    let results = getState().objects.objects;

    /*
    * Just use cached result if we already queried for it
    */

    if( !results.length ){

      // Generate fake data broker
      let broker = Databroker( brokerTimeout, mockObjects );

      // optimistic UI update for loading indicator
      dispatch({type: 'SET_LOADING', isLoading: true});

      return broker.then(function( response ){

        let objects = Object.keys( response ).reduce(function( acc, item ) {

          // denormalize
          acc.push({
            id: item,
            ...response[ item ]
          });

          return acc;

        }, []);

        dispatch({type: 'LOAD_OBJECTS_SUCCESS', objects: objects});

      });

    } else {

      return Promise.resolve();

    }

  }

};

export { fetchObjects }
