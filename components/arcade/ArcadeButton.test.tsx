import { render, screen } from '@testing-library/react';
import { ArcadeButton } from './ArcadeButton';

describe('ArcadeButton', () => {
  it('renders children correctly', () => {
    render(<ArcadeButton>PRESS START</ArcadeButton>);
    expect(screen.getByText('PRESS START')).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    const { container } = render(
      <ArcadeButton variant="cyan">CLICK ME</ArcadeButton>
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-neonCyan');
  });

  it('applies size styles correctly', () => {
    const { container } = render(
      <ArcadeButton size="lg">LARGE BUTTON</ArcadeButton>
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('px-8');
  });

  it('passes through button props', () => {
    const handleClick = jest.fn();
    render(<ArcadeButton onClick={handleClick}>CLICK</ArcadeButton>);
    screen.getByText('CLICK').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
