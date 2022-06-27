import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import data from './components/data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      dataCards: data,
    };
  }

  verificaValues = () => {
    this.setState((prevState) => {
      const { cardAttr1, cardAttr2, cardAttr3 } = prevState;
      const attrSoma = (
        parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
      );
      console.log(attrSoma);
      const limit = 210;
      const maior90 = 90;
      const menor0 = 0;
      return ({
        isSaveButtonDisabled: Object
          .values(prevState)
          .some((prop) => (
            prop === '' || prop > maior90 || prop < menor0 || attrSoma > limit)),
      });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      dataCards: [...prevState.dataCards, prevState],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
    this.verificaValues();
  }

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
      isSaveButtonDisabled } = this.state;
    return (
      <div className="body-game">
        <h1>Trunfo</h1>
        <section className="card-Create">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
