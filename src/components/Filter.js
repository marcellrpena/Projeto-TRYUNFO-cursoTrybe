import React from 'react';
import PropTypes from 'prop-types';
import './style/Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardRare,
      fullFilter } = this.props;
    return (
      <aside className="left-side">
        <h1>Todas as cartas</h1>
        <input
          data-testid="name-filter"
          type="text"
          name="cardName"
          placeholder="Nome da Carta"
          value={ cardName }
          onChange={ (e) => fullFilter(e) }
        />
        <label htmlFor="Raridade">
          <select
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
      </aside>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  fullFilter: PropTypes.func.isRequired,
};

export default Form;
