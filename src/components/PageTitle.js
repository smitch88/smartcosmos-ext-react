import React from 'react';

const classNames = require('classnames');

/*
* PageTitle component
*
* Renders a heading element with optional muted secondary text and inline icon
*
* CSS Reference: /styles/components/page-title.scss
*
*/

class PageTitle extends React.Component {

  render() {

    const { main, secondary, icon } = this.props;

    return (
      <div className="page-title">
        { icon && <i className={classNames( 'page-title__icon', icon )}></i> }
        <h1 className="page-title__main">
          { main }
          { secondary && <small className="page-title__secondary">{ secondary }</small> }
        </h1>
      </div>
    );

  }

}

export default PageTitle;
