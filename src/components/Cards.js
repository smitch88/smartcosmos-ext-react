import React from 'react';
import classNames from 'classnames';

/*
* Cards component
*
* Renders a grid of cards
*
*/

class Cards extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selected: null
    };

    // Bind this only once per instance
    this.generateCard = this.generateCard.bind(this);
    this.onCardSelected = this.onCardSelected.bind(this);

  }

  onCardSelected( index, item, onSelect ){

    // Change card selected state
    this.setState({
      selected: index
    });

    // Handle external callback
    if( onSelect ){

      onSelect( item );

    }

  }

  /*
  * Returns a function closed over the cards `col` width based on a 12 column
  * grid system determined by `rowCount`
  */
  generateCard({ perRow = 3, onSelect, selected } ){

    let col = parseInt( 12 / perRow );

    return function( item , index ){

      let { id, title, text } = item;
      let isSelected = selected === id;
      let cardClass = classNames( 'cards__card', {selected: isSelected});
      let handler = this.onCardSelected.bind( null, index, item, onSelect );

      return (
        <div key={ index } className={ 'col-sm-' + col }>
          <div className={ cardClass }
               onClick={ handler }>
            <div className="cards__block">
              <h4 className="cards__title">{ title }</h4>
              <p className="cards__text">{ text }</p>
            </div>
          </div>
        </div>
      );

    }.bind( this );

  }

  render() {

    let { data } = this.props;

    let cards = data && data.map(this.generateCard(this.props));

    return (
      <div className="cards row">
        { cards }
      </div>
    );

  }

}

export default Cards;
