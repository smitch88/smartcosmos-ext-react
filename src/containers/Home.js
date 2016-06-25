import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

class Home extends Component {

  render() {

    return (
      <div className="home-container">
        <PageTitle main="Home"
                   icon="branding-logo branding-logo--sm pad-right" />
        <p className="lead">Welcome to the SMART COSMOS Objects playground.</p>
      </div>
    );

  }

}

export default Home;
