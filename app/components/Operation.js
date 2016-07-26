import React from 'react';
import {add,substract,multiply,divide} from '../actions/operations';

class Operation extends React.Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {valor:10};
  }

  add(e){
    e.preventDefault();
    this.props.dispatch(add(this.state.valor));
  }

  substract(e){
    e.preventDefault();
    this.props.dispatch(substract(this.state.valor));
  }

  multiply(e){
    e.preventDefault();
    this.props.dispatch(multiply(this.state.valor));
  }

  divide(e) {
    e.preventDefault();
    this.props.dispatch(divide(this.state.valor));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({valor: Number(e.target.value.trim())});
  }

  render() {
    const style = {
      width: '70%',
      margin: '0 auto',
      textAlign: 'center',
      border: '2px solid red',
      overflow: 'hidden'
    }
    return (
      <section style={style}>
        <h1>{this.props.name}</h1>
        <form className="buttons">
          <input type="number" value={this.state.valor} onChange={this.handleChange} className="valor"></input>
          <button className="btn" onClick={this.add}>+</button>
          <button className="btn" onClick={this.substract}>-</button>
          <button className="btn" onClick={this.multiply}>*</button>
          <button className="btn" onClick={this.divide}>/</button>
        </form>
        <h2 className="result">{this.props.operations}</h2>
      </section>
    )
  }
}

export default Operation;
