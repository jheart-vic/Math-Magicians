import React, { useState } from 'react';
import './Calculator.css';
import Button from './button';
import InputResult from './inputDisplay';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const onButtonClick = (e) => {
    const buttonName = e;
    const { obj } = state;
    setState({
      obj: calculate(obj, buttonName),
    });
  };

  const { obj } = state;
  return (
    <div className="wrapper">
      <div className="text">
        <h2>Let&apos;s do some Maths!</h2>
      </div>
      <div className="container">
        <InputResult displayState={obj} />
        <Button buttonClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
