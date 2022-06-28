import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="btns-container">
          <div className="btn-container">
            <div className="input">0</div>
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="orange">&#247;</button>
          </div>
          <div className="btn-container">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="orange">x</button>
          </div>
          <div className="btn-container">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="orange">-</button>
          </div>
          <div className="btn-container">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="orange">+</button>
          </div>
          <div className="btn-container">
            <button type="button" className="bigBtn">0</button>
            <button type="button" className="Dot">.</button>
            <button type="button" className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
