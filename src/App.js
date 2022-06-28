import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
/* import data from './components/data'; */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      dataCards: [],
    };
  }

  verificaValues = () => {
    this.setState((prevState) => {
      const { cardAttr1, cardAttr2, cardAttr3 } = prevState.info;
      const attrSoma = (
        parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
      );
      console.log(attrSoma);
      const limit = 210;
      const maior90 = 90;
      const menor0 = 0;
      return ({
        isSaveButtonDisabled: Object
          .values(prevState.info)
          .some((prop) => (
            prop === '' || prop > maior90 || prop < menor0 || attrSoma > limit)),
      });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      info: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
      dataCards: [prevState.dataCards, prevState.info],
      isSaveButtonDisabled: true,
    }));
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState((prevState) => {
      const { info } = prevState;
      delete info[target.name];
      return {
        info: {
          ...info,
          [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        },
        hasTrunfo: target.type === 'checkbox' && target.checked,
      };
    });
    this.verificaValues();
  }

  render() {
    const {
      info,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div className="body-game">
        <h1>Trunfo</h1>
        <section className="card-Create">
          <Form
            { ...info }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...info }
          />
        </section>
      </div>
    );
  }
}

export default App;
