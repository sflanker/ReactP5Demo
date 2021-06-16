import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/P5\.js React Demo/i);
  expect(headingElement).toBeInTheDocument();
});
