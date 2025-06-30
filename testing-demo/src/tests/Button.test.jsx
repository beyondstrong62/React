import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../src/components/Button';

describe('Button Component', () => {
  test('calls onClick when clicked and shows loading', async () => {
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Submit</Button>);
    
    const button = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass('loading');
    expect(button).toBeDisabled();
  });
});