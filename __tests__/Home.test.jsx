import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('should have Docs text', () => {
    render(<Home />); // Arrange

    const element = screen.getByText('Docs'); // Act

    expect(element).toBeInTheDocument(); // Assert
  });

  it('should have given sentence', () => {
    render(<Home />); // Arrange

    const element = screen.getByText(/find in-depth/i); // Act

    expect(element).toBeInTheDocument(); // Assert
  });
});
