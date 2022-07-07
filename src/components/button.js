import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonClick } = props;
  return (
    <div className="btns-container">
      <div className="btn-container">
        <button type="button" onClick={() => buttonClick('AC')}>AC</button>
        <button type="button" onClick={() => buttonClick('+/-')}>+/-</button>
        <button type="button" onClick={() => buttonClick('%')}>%</button>
        <button type="button" onClick={() => buttonClick('÷')} className="orange">&#247;</button>
      </div>
      <div className="btn-container">
        <button type="button" onClick={() => buttonClick('7')}>7</button>
        <button type="button" onClick={() => buttonClick('8')}>8</button>
        <button type="button" onClick={() => buttonClick('9')}>9</button>
        <button type="button" onClick={() => buttonClick('x')} className="orange">x</button>
      </div>
      <div className="btn-container">
        <button type="button" onClick={() => buttonClick('4')}>4</button>
        <button type="button" onClick={() => buttonClick('5')}>5</button>
        <button type="button" onClick={() => buttonClick('6')}>6</button>
        <button type="button" onClick={() => buttonClick('-')} className="orange">-</button>
      </div>
      <div className="btn-container">
        <button type="button" onClick={() => buttonClick('1')}>1</button>
        <button type="button" onClick={() => buttonClick('2')}>2</button>
        <button type="button" onClick={() => buttonClick('3')}>3</button>
        <button type="button" onClick={() => buttonClick('+')} className="orange">+</button>
      </div>
      <div className="btn-container">
        <button type="button" onClick={() => buttonClick('0')} className="bigBtn">0</button>
        <button type="button" onClick={() => buttonClick('.')} className="Dot">.</button>
        <button type="button" onClick={() => buttonClick('=')} className="orange">=</button>
      </div>
    </div>
  );
};

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
