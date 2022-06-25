import React from 'react';

class ImputForm extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Nome">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            placeholder="Digite o Nome"
          />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <textarea
            data-testid="description-input"
            placeholder="Descreva a Carta"
          />
        </label>
        <label htmlFor="atr01">
          Attr01:
          <input
            type="number"
            data-testid="attr1-input"
            placeholder="Atributo 01"
          />
        </label>
        <label htmlFor="atr02">
          Attr02:
          <input
            type="number"
            data-testid="attr2-input"
            placeholder="Atributo 02"
          />
        </label>
        <label htmlFor="atr03">
          Attr03:
          <input
            type="number"
            data-testid="attr3-input"
            placeholder="Atributo 03"
          />
        </label>
        <label htmlFor="Imagem-link">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            placeholder="Link da Imagem"
          />
        </label>
        <label htmlFor="Raridade">
          Raridade:
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />
          Trunfo
        </label>
      </div>
    );
  }
}

export default ImputForm;
