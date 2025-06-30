import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders Vite + React', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});