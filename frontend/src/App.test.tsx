import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders forgot password link', () => {
  render(<App />);
  const linkElement = screen.getByText(/forgot password/i);
  expect(linkElement).toBeInTheDocument();
});
