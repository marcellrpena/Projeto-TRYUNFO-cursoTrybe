import React from 'react';
import PropTypes from 'prop-types';
import './style/Filter.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardRare,
      cardTrunfo,
      verificaFiltro,
      fullFilter } = this.props;
    return (
      <aside className="left-side input-form">
        <h1>Todas as cartas</h1>
        <label htmlFor="filter-name">
          <h5>Filtro de busca</h5>
          <input
            disabled={ cardTrunfo }
            className="form-control"
            data-testid="name-filter"
            type="text"
            name="cardName"
            placeholder="Nome da Carta"
            value={ cardName }
            onChange={ (e) => fullFilter(e) }
          />
        </label>
        <label htmlFor="Raridade">
          <select
            disabled={ cardTrunfo }
            data-testid="rare-filter"
            className="form-select"
            name="cardRare"
            onChange={ fullFilter }
            value={ cardRare }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label
          htmlFor="filter-checkbox"
          className="mb-3 space-inline"
        >
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ verificaFiltro }
            name="cardTrunfo"
            data-testid="trunfo-filter"
            className="form-check-input"
            id="filter-checkbox"
          />
          <span className="form-check-label">Super Trybe Trunfo</span>
        </label>
      </aside>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  fullFilter: PropTypes.func.isRequired,
  verificaFiltro: PropTypes.func.isRequired,
};

export default Form;
