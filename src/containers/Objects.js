import React, { Component } from 'react';
import Cards from '../components/Cards';
import PageTitle from '../components/PageTitle';

class Objects extends Component {

  objectSelected( object ) {
    window.console.log( "Object selected ", object );
  }

  render() {

    // Replace with fetched data from store
    const cardCount = [ ...Array( 11 ).keys() ];

    let cardData = cardCount.map(function( item, index ){
      return {
        title: 'Card - ' + item,
        text: 'Some card text to display ' + item
      };
    });

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
        <Cards data={ cardData } onSelect={ this.objectSelected } />
      </div>
    );

  }

}

export default Objects;
