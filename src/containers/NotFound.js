import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {

  render() {

    return (
      <div id="not-found-page" className="not-found">
        <h1 className="not-found__title text-error">404 - Page Not Found</h1>
        <p className="lead">
          You have attempted to view a page that does not exist.
        </p>
        <p className="lead">
          Press back or click the link below to return to your last location
        </p>
        <Link className="not-found__return-link" to="/">Back</Link>
      </div>
    );

  }

}

export default NotFound;
