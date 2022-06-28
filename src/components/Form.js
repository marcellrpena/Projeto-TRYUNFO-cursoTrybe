import React from 'react';
import PropTypes from 'prop-types';
import './style/Form.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange } = this.props;
    const attrSoma = (
      parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
    );
    const AttrLimit = 210;
    const AttrRest = AttrLimit - attrSoma;
    return (
      <form className="input-form">
        <label htmlFor="Nome" required className="mb-3 input-form">
          <h5>Nome</h5>
          <input
            className="form-control"
            id="Nome"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ (e) => onInputChange(e) }
            data-testid="name-input"
            placeholder="Digite o Nome"
          />
        </label>
        <label htmlFor="Descrição" className="mb-3 input-form">
          <h5>Descrição</h5>
          <textarea
            onChange={ onInputChange }
            value={ cardDescription }
            name="cardDescription"
            className="form-control"
            data-testid="description-input"
            placeholder="Descreva a Carta"
            id="Descrição"
            rows={ 3 }
            cols={ 28 }
          />
        </label>
        <label htmlFor="atr01" className="mb-3 input-group">
          <span className="input-group-text">Attr01</span>
          <input
            className="form-control"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr1 }
            name="cardAttr1"
            data-testid="attr1-input"
            placeholder="Atributo 01"
            id="atr01"
            min={ 0 }
            max={ 90 }
          />
        </label>
        <label htmlFor="atr02" className="mb-3 input-group">
          <span className="input-group-text">Attr02</span>
          <input
            className="form-control"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr2 }
            name="cardAttr2"
            data-testid="attr2-input"
            placeholder="Atributo 02"
            id="atr02"
            min={ 0 }
            max={ 90 }
          />
        </label>
        <label htmlFor="atr03" className="mb-3 input-group">
          <span className="input-group-text">Attr03</span>
          <input
            className="form-control"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr3 }
            name="cardAttr3"
            data-testid="attr3-input"
            placeholder="Atributo 03"
            id="atr03"
            min={ 0 }
            max={ 90 }
          />
        </label>
        <p>{ `Pontos Restantes = ${AttrRest}` }</p>
        <label htmlFor="Imagem-Link" className="mb-3 input-group">
          <span className="input-group-text">Link</span>
          <input
            className="form-control"
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
            name="cardImage"
            data-testid="image-input"
            placeholder="Link da Imagem"
            id="Imagem-Link"
          />
        </label>
        <label htmlFor="Raridade" className="mb-3 input-form">
          <h5>Raridade</h5>
          <select
            data-testid="rare-input"
            className="form-select"
            name="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          !hasTrunfo
            ? (
              <label
                htmlFor="checkbox"
                className="mb-3 space-inline"
              >
                <input
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  className="form-check-input"
                  id="checkbox"
                />
                <span className="form-check-label">Trunfo</span>
              </label>
            )
            : (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            )
        }
        <button
          className="btn btn-outline-success"
          type="submit"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
