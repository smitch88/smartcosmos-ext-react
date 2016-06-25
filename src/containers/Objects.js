import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchObjects } from '../actions/objects';

// Components
import Cards from '../components/Cards';
import LoadingIndicator from '../components/LoadingIndicator';
import PageTitle from '../components/PageTitle';

class Objects extends Component {

  componentDidMount(){
    this.props.mounted();
  }

  render() {

    let { objects, selected, isLoading, handleSelect } = this.props;

    let objectContent = (isLoading ?

      <div className="align-center">
        <LoadingIndicator size="lg" text="Loading . . ." />
      </div>

    :

      <Cards data={ objects }
             selected={ selected }
             onSelect={ handleSelect } />

    );

    return (
      <div className="objects-container">

        <PageTitle main="Objects"/>

        <p className="lead">
          Objects are a critical element in SMART COSMOS Objects. To put it
          simply, objects present things both tangible and intangible -- your
          car is an object because it presents a unique thing only one of which
          exists in the world. However, your car also represents a model of
          a car, and this model can shared among thousands of other cars.
        </p>

        <p className="lead">
          Objects by themselves are not very interesting.  Each object has
          a <strong>type</strong> and <strong>name</strong> not necessarily
          unique to that object, which assists in grouping and classifying
          different objects.
        </p>

        <div className="objects-container__content">
          { objectContent }
        </div>

      </div>
    );

  }

}

/*
* Subscription
*/

function mapStateToProps(state) {

  return {
    ...state.objects,
    session: state.session
  }

}

/*
* Dispatchers
*/

function mapDispatchToProps(dispatch) {

  return {

    handleSelect: function( object ){
      dispatch({ type: 'SET_SELECTED', id: object.id });
    },

    mounted: function(){
      dispatch(fetchObjects());
    }

  };

}

export default connect(mapStateToProps, mapDispatchToProps)(Objects);
