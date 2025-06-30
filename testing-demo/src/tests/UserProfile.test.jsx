import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../src/components/UserProfile';
import * as api from '../src/api';

// Mock API module
vi.mock('../src/api');

describe('UserProfile', () => {
  test('loads user data', async () => {
    // Mock API response
    api.fetchUser.mockResolvedValue({
      id: 1,
      name: 'Mocked User',
      email: 'mocked@example.com'
    });

    render(<UserProfile userId={1} />);
    
    // Verify loading state
    expect(screen.getByText(/loading user/i)).toBeInTheDocument();
    
    // Wait for data to load
    expect(await screen.findByText(/name: mocked user/i)).toBeInTheDocument();
    expect(screen.getByText(/email: mocked@example.com/i)).toBeInTheDocument();
  });

  test('handles error state', async () => {
    // Mock API error
    api.fetchUser.mockRejectedValue(new Error('User not found'));

    render(<UserProfile userId={999} />);
    
    // Verify error message
    expect(await screen.findByText(/error: user not found/i)).toBeInTheDocument();
  });
});