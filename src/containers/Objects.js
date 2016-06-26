import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchObjects } from '../actions/objects';

// Components
import Cards from '../components/Cards';
import LoadingIndicator from '../components/LoadingIndicator';
import PageTitle from '../components/PageTitle';

const uppercaseRegex = /(?=[A-Z])/;

const capitalize = function( s ){
  return s ? (s[0].toUpperCase() + s.substring( 1, s.length )) : "";
}

class Objects extends Component {

  constructor(props){

    super(props);

    this.cardRenderer = this.cardRenderer.bind(this);
    this.keyToDisplay = this.keyToDisplay.bind(this);
    this.valueToDisplay = this.valueToDisplay.bind(this);
    this.renderListView = this.renderListView.bind(this);

  }

  componentDidMount(){
    this.props.mounted();
  }

  /*
  * Takes a `k` and returns a displayable version of the key
  * i.e Camel -> spaced and capitalized
  */
  keyToDisplay( k ){
    return k.split( uppercaseRegex )
            .map( capitalize )
            .join( " " );
  }

  /*
  * Takes a `value` and returns a displayable version
  */
  valueToDisplay( value ){

    let valueType = typeof value;
    let returnValue;

    switch( valueType ){

      case 'boolean':
        returnValue = value ? "Yes" : "No";
        break;

      case 'object':
        returnValue = value.toString();
        break;

      default:
        returnValue = value.toString();
        break;
    }

        return returnValue;
    }

  // This would ultimately be another kind of component
  renderListView( item ){
    return (
      <ul className="list-view">
        {
          Object.keys( item ).map(function( k, index ){

            let keyDisplay = this.keyToDisplay( k );
            let valueDisplay = this.valueToDisplay( item[ k ] );

            return ( valueDisplay &&
                    <li key={ index } className="list-view__item">
                      <label className="list-view__label">
                        { keyDisplay }:
                      </label>
                      <p className="list-view__value">
                        { valueDisplay }
                      </p>
                    </li>
                   )}.bind(this))
        }
      </ul>
    );
  }

  cardRenderer( item ){

    return {
      title: item.name,
      text: <div className="object-card-container">
              { item.description && <p className="lead">item.description</p> }
              { this.renderListView( item ) }
            </div>
    };

  }

  render() {

    let { objects, selected, isLoading, handleSelect } = this.props;

    let objectContent = (isLoading ?

      <div className="align-center">
        <LoadingIndicator size="lg" text="Loading . . ." />
      </div>

    :

      <Cards data={ objects }
             renderer = { this.cardRenderer }
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
