import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '../src/components/RegistrationForm';
import * as api from '../src/api';

// Mock API module
vi.mock('../src/api');

describe('RegistrationForm', () => {
  test('submits form with valid data', async () => {
    // Mock API response
    api.registerUser.mockResolvedValue({
      id: 1,
      name: 'Test User',
      email: 'test@example.com'
    });

    render(<RegistrationForm />);
    
    // Fill form
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'securePass123!');
    
    // Submit form
    await userEvent.click(screen.getByRole('button', { name: /create account/i }));
    
    // Verify success message
    expect(await screen.findByText(/welcome test user/i)).toBeInTheDocument();
    
    // Verify API call
    expect(api.registerUser).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'securePass123!'
    });
  });
});