import React from 'react';
import PropTypes from 'prop-types';
import './style/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="preview-card">
        <h4 data-testid="name-card">{ cardName }</h4>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ `Attr02....................${cardAttr1}` }</p>
        <p data-testid="attr2-card">{ `Attr02....................${cardAttr2}` }</p>
        <p data-testid="attr3-card">{ `Attr02....................${cardAttr3}` }</p>
        <h4 data-testid="rare-card">{ cardRare }</h4>
        {
          cardTrunfo && <h4 data-testid="trunfo-card">Super Trunfo</h4>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
