import { screen, fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('Testing onClick events', () => {
  render(<Calculator />);
  expect(screen.getByTestId('displayInput')).toHaveTextContent('0');
});

test('Testing onClick events', () => {
  render(<Calculator />);
  const fireOne = screen.getByTestId('one');
  fireEvent.click(fireOne);
  expect(screen.getByTestId('displayInput')).toHaveTextContent('1');
});
test('Testing onClick events', () => {
  render(<Calculator />);
  const fireOne = screen.getByTestId('plus');
  fireEvent.click(fireOne);
  expect(screen.getByTestId('displayInput')).toHaveTextContent('+');
});
