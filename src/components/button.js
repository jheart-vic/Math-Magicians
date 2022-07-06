import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonClick } = props;
  return (
    <div className="btns-container">
      <div className="btn-container">
        <button type="button" data-testid="clear" onClick={() => buttonClick('AC')}>AC</button>
        <button type="button" data-testid="plus-minus" onClick={() => buttonClick('+/-')}>+/-</button>
        <button type="button" data-testid="mol" onClick={() => buttonClick('%')}>%</button>
        <button type="button" data-testid="divide" onClick={() => buttonClick('÷')} className="orange">&#247;</button>
      </div>
      <div className="btn-container">
        <button type="button" data-testid="seven" onClick={() => buttonClick('7')}>7</button>
        <button type="button" data-testid="eight" onClick={() => buttonClick('8')}>8</button>
        <button type="button" data-testid="nine" onClick={() => buttonClick('9')}>9</button>
        <button type="button" data-testid="times" onClick={() => buttonClick('x')} className="orange">x</button>
      </div>
      <div className="btn-container">
        <button type="button" data-testid="four" onClick={() => buttonClick('4')}>4</button>
        <button type="button" data-testid="five" onClick={() => buttonClick('5')}>5</button>
        <button type="button" data-testid="six" onClick={() => buttonClick('6')}>6</button>
        <button type="button" data-testid="minus" onClick={() => buttonClick('-')} className="orange">-</button>
      </div>
      <div className="btn-container">
        <button type="button" data-testid="one" onClick={() => buttonClick('1')}>1</button>
        <button type="button" data-testid="two" onClick={() => buttonClick('2')}>2</button>
        <button type="button" data-testid="three" onClick={() => buttonClick('3')}>3</button>
        <button type="button" data-testid="plus" onClick={() => buttonClick('+')} className="orange">+</button>
      </div>
      <div className="btn-container">
        <button type="button" data-testid="zero" onClick={() => buttonClick('0')} className="bigBtn">0</button>
        <button type="button" data-testid="dot" onClick={() => buttonClick('.')} className="Dot">.</button>
        <button type="button" data-testid="equalSign" onClick={() => buttonClick('=')} className="orange">=</button>
      </div>
    </div>
  );
};

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
