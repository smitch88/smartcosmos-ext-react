import React from 'react';
import classNames from 'classnames';

const loadingSizeClass = {
  'sm': 'fa-sm',
  'md': 'fa-lg',
  'lg': 'fa-2x',
  'xl': 'fa-4x'
};

/*
* LoadingIndicator component
*
*/

class LoadingIndicator extends React.Component {

  render() {

    const { icon = 'fa-spinner', size = 'lg', text } = this.props;
    const loadingClass = classNames( 'loading-indicator__icon',
                                     'fa fa-spin',
                                     loadingSizeClass[ size ],
                                     icon );

    return (
      <div className="loading-indicator">
        <i className={ loadingClass }></i>
        { text && <p className="loading-indicator__text">{ text }</p> }
      </div>
    );

  }

}

export default LoadingIndicator;
