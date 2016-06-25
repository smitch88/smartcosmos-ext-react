import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

class Relationships extends Component {

  render() {

    return (
      <div className="relationships-container">
        <PageTitle main="Relationships"/>
        <p className="lead">
          Relationships are the ability to capture "yes or no"
          relationship status between arbitrary objects.
        </p>
        <p className="lead">
          Much like Objects, Relationships by themselves are not fairly
          interesting.  They deal with cryptic links between unknown
          identifiers, that fails to apply much meaning to our everyday lives.
        </p>
      </div>
    );

  }

}

export default Relationships;
