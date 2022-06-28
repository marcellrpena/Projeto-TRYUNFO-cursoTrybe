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
      dataCards: [...prevState.dataCards, prevState.info],
      isSaveButtonDisabled: true,
    }));
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState((prevState) => {
      const { info } = prevState; /* info é um Objeto contendo as informações antigas */
      delete info[target.name]; /* O alvo trás uma informação nova para adicioná-la preciso apagar a antiga */
      return {
        info: { /* Objeto constituído por elementos do Objeto Info antigo e o novo elemento do Avlo */
          ...info, /* usado o spreed para "transferir os elementos do objeto info antigo para o novo" */
          [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        },
        hasTrunfo: (
          target.type === 'checkbox' && target.checked) || (prevState.hasTrunfo),
      };
    });
    this.verificaValues(); /* valida se as novas informações são suficientes para ativar o botão salvar */
  }

  removeCard = (index) => {
    this.setState((prevState) => ({
      dataCards: prevState.dataCards.filter((card, idx) => idx !== index && card),
      hasTrunfo: !prevState.dataCards[index].cardTrunfo,
    }));
  }

  render() {
    const {
      info,
      hasTrunfo,
      dataCards,
      isSaveButtonDisabled } = this.state;
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
            <h1 className="header">Pré-visualização</h1>
            <Card
              { ...info }
            />
          </div>
        </section>
        <section>
          <aside>
            <h1>Todas as cartas</h1>
          </aside>
          <aside>
            {
              dataCards.map((card, index) => (
                <div key={ index }>
                  <Card { ...card } />
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => this.removeCard(index) }
                  >
                    Excluir
                  </button>
                </div>
              ))
            }
          </aside>
        </section>
      </div>
    );
  }
}

export default App;
