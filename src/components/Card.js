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
      cardTrunfo,
    } = this.props;
    return (
      <div className="card-external">
        <div className="card-internal">
          <div className="name-image">
            <h4 className="card-name" data-testid="name-card">{ cardName }</h4>
            <div className="card-image">
              <img
                className="image"
                data-testid="image-card"
                src={ cardImage }
                alt={ cardName }
              />
            </div>
          </div>
          <div className="card-description">
            <h6
              data-testid="description-card"
            >
              { cardDescription }
            </h6>
          </div>
          <div className="card-atributo">
            <div className="text-attr">
              <span className="text">Attr01...................</span>
              <p data-testid="attr1-card" className="attr-number">{cardAttr1}</p>
            </div>
            <div className="text-attr">
              <span className="text">Attr02...................</span>
              <p data-testid="attr2-card" className="attr-number">{cardAttr2}</p>
            </div>
            <div className="text-attr">
              <span className="text">Attr03...................</span>
              <p data-testid="attr3-card" className="attr-number">{cardAttr3}</p>
            </div>
            <h5 data-testid="rare-card" className="zero-margin">{ cardRare }</h5>
            <div className="trunfo">
              {
                cardTrunfo && (
                  <h5
                    data-testid="trunfo-card"
                    className="zero-margin"
                  >
                    Super Trunfo
                  </h5>)
              }
            </div>
          </div>
        </div>
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
