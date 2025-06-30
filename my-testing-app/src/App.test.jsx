import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// DO NOT import '@testing-library/jest-dom' here. It's handled globally by setupTests.js.

import App from './App'; // Import your App component

// Test case 1: Renders the welcome text
test('renders welcome text', () => {
  render(<App />);
  const welcomeText = screen.getByText(/welcome to react testing!/i);
  expect(welcomeText).toBeInTheDocument();
});

// Test case 2: Allows user to type into the name input and displays greeting
test('allows user to type into the name input and displays greeting', async () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText('Your Name');
  await userEvent.type(nameInput, 'Rana');

  expect(nameInput).toHaveValue('Rana');

  const greetingText = screen.getByText(/Hello, Rana!/i);
  expect(greetingText).toBeInTheDocument();
});

// Test case 3: Check if the submit button is rendered
test('renders the submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});