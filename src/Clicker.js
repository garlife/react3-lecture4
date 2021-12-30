import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.onClickUp = this.onClickUp.bind(this);

    this.state = {
      count: 0,
    };
  }

  onClickUp() {
    console.log('test up');
    //   this.state.count++
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    console.log(this.state.count);
  }

  onClickDown() {
    console.log('test down');
    //   this.state.count--
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickUp}>UP</button>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.onClickDown()}>DOWN</button>
      </div>
    );
  }
}

export default Clicker;
