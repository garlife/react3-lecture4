import React, { Component } from 'react';
import './style.css';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }
  counter = 0;
  increment() {
    console.log(this.counter);
    this.counter++;
  }
  decrement() {
    console.log(this.counter);
    this.counter--;
  }
  render() {
    return (
      <>
        <button onClick={this.increment}>Нажми меня!</button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          Нажми меня!
        </button>
      </>
    );
  }
}

export default Clicker;
