import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
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
      filtered: {
        cardName: '',
        cardRare: 'todas',
        cardTrunfo: false,
      },
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      datafilter: [],
      dataCards: [],
    };
  }

  verificaValues = () => {
    this.setState((prevState) => {
      const { cardAttr1, cardAttr2, cardAttr3 } = prevState.info;
      const attrSoma = (
        parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
      );
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

  verificaFiltro = (event) => {
    const { target } = event;
    this.setState((prevState) => ({
      filtered: {
        cardName: '',
        cardRare: 'todas',
        cardTrunfo: target.checked,
      },
      datafilter: target.checked ? prevState.dataCards
        .filter((card) => card.cardTrunfo === true) : prevState.dataCards,
    }
    ));
  };

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
      dataCards: [...prevState.dataCards, prevState.info],
      isSaveButtonDisabled: true,
    }));
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState((prevState) => {
      const { info } = prevState; /* info ?? um Objeto contendo as informa????es antigas */
      delete info[target.name]; /* O alvo tr??s uma informa????o nova para adicion??-la preciso apagar a antiga */
      return {
        info: { /* Objeto constitu??do por elementos do Objeto Info antigo e o novo elemento do Avlo */
          ...info, /* usado o spreed para "transferir os elementos do objeto info antigo para o novo" */
          [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        },
        hasTrunfo: (
          target.type === 'checkbox' && target.checked) || (prevState.hasTrunfo),
      };
    });
    this.verificaValues(); /* valida se as novas informa????es s??o suficientes para ativar o bot??o salvar */
  }

  fullFilter = (e) => {
    const { target } = e;
    this.setState((prevState) => {
      const { filtered } = prevState;
      delete filtered[target.name];
      return {
        filtered: {
          ...filtered,
          [target.name]: target.value,
        },
        datafilter: prevState.dataCards.filter((card) => (
          target.type === 'select-one' ? (
            card[target.name] === target.value
          ) : card[target.name].includes(target.value)
        )),
      };
    });
  }

  removeCard = (index) => {
    this.setState((prevState) => ({
      dataCards: prevState.dataCards.filter((card, idx) => idx !== index && card),
      hasTrunfo: !(prevState.hasTrunfo && prevState.dataCards[index].cardTrunfo),
    }));
  }

  render() {
    const {
      info,
      filtered,
      datafilter,
      dataCards,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    const dataStart = (filtered
      .cardRare !== 'todas' || filtered
      .cardName !== '' || filtered.cardTrunfo) ? datafilter : dataCards;
    return (
      <div className="body-game">
        <h1>Trunfo</h1>
        <section className="card-Create">
          <div className="form-add-card">
            <h1>Adicionar Nova Carta</h1>
            <Form
              { ...info } /* usando o spreed para passar props de mesmo nome para o filho */
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="preview-card">
            <h1 className="header">Pr??-visualiza????o</h1>
            <Card
              { ...info }
            />
          </div>
        </section>
        <section className="all-cards">
          <Filter
            { ...filtered }
            fullFilter={ this.fullFilter }
            verificaFiltro={ this.verificaFiltro }
          />
          {
            dataStart.map((card, index) => (
              <div key={ index } className="all-card">
                <Card { ...card } />
                <button
                  className="btn btn-outline-danger"
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.removeCard(index) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
