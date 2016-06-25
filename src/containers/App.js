import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component injection
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class App extends Component {

  render() {

    const { actions, children, application, session } = this.props;

    return (
      <div id="app">
        <Navbar/>
        <div className="container main-content">
          { /* inject child components passed in via react-router */ }
          { children }
        </div>
        <Footer version={ application && application.version } />
      </div>
    );

  }

}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

/*
* Cursor into centralized data store. Could also use store.subscribe but this
* way is a little more idiomatic for access into the store
*/

function mapStateToProps(state) {
  return {
    application: state.application,
    session: state.session
  }
}

/*
* Dispatcher functions
*/

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
