import React from 'react';
import ImputForm from './ImputForm';

class Form extends React.Component {
  render() {
    return (
      <div>
        <ImputForm />
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
