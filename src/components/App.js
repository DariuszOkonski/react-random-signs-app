import React, { Component } from 'react';
import './App.css';
import ButtonController from './ButtonController';
import DisplayRandomSign from './DisplayRandomSign';
import DisplayTable from './DisplayTable';

const codesToChoose = 'ABCDEFGHIJKLMNOPRSTQUV0123456789';

class App extends Component {
  state = {
    numberOfLetters: 0,
    randomCode: '',
    codes: [],
  }

  handleClearTable = () => {
    this.setState({
      codes: [],
    })
  }

  handleCreateRandomSigns = () => {
    if (this.state.numberOfLetters < 10) {
      let index = Math.floor(Math.random() * codesToChoose.length);
      let sign = codesToChoose[index];

      this.setState(prevState => ({
        numberOfLetters: prevState.numberOfLetters + 1,
        randomCode: prevState.randomCode + sign,
      }));
    } else {
      alert('You have reached max number of a signs');
    }
  }

  handleAddToTable = () => {
    if (this.state.numberOfLetters > 0) {
      const codes = [...this.state.codes];
      codes.push(this.state.randomCode);

      this.setState({
        codes,
        numberOfLetters: 0,
        randomCode: ''
      })
    } else {
      alert('You need to have at least one sign');
    }
  }

  handleClearRandomSign = () => {
    if (this.state.numberOfLetters > 0) {
      this.setState({
        numberOfLetters: 0,
        randomCode: '',
      })
    }
  }

  render() {
    return (
      <div className="app">
        <h2>Add random signs app</h2>
        <ButtonController
          handleClearTableClick={this.handleClearTable}
          handleCreateRandomSignsClick={this.handleCreateRandomSigns}
          handleAddToTableClick={this.handleAddToTable}
          handleClearRandomSignClick={this.handleClearRandomSign}
        />
        <DisplayRandomSign
          randomCode={this.state.randomCode}
        />
        <DisplayTable
          codes={this.state.codes}
        />
      </div>
    );
  }
}

export default App;