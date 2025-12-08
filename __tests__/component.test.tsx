import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial data', async () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: null,
      data: { products: [{ id: '1', name: 'Product 1' }] },
    });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  test('renders loading state while fetching data', () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: true,
      error: null,
      data: undefined,
    });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message when fetching fails', () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: new Error('Failed to fetch data'),
      data: undefined,
    });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });

  test('handles user interaction with product items', async () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: null,
      data: { products: [{ id: '1', name: 'Product 1' }] },
    });

    render(<CoreFunctionalityComponent />);

    // Act
    fireEvent.click(screen.getByText('View Details'));

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Details for Product 1')).toBeInTheDocument();
    });
  });

  test('ensures accessibility features are properly implemented', () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: null,
      data: { products: [{ id: '1', name: 'Product 1' }] },
    });

    render(<CoreFunctionalityComponent />);

    // Act & Assert
    expect(screen.getByText('Product 1')).toHaveAttribute('aria-label', 'product-1');
    expect(screen.getByRole('button', { name: /view details/i })).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial data', async () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: null,
      data: { products: [{ id: '1', name: 'Product 1' }] },
    });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  test('renders loading state while fetching data', () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: true,
      error: null,
      data: undefined,
    });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message when fetching fails', () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: new Error('Failed to fetch data'),
      data: undefined,
    });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });

  test('handles user interaction with product items', async () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: null,
      data: { products: [{ id: '1', name: 'Product 1' }] },
    });

    render(<CoreFunctionalityComponent />);

    // Act
    fireEvent.click(screen.getByText('View Details'));

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Details for Product 1')).toBeInTheDocument();
    });
  });

  test('ensures accessibility features are properly implemented', () => {
    // Arrange
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({
      loading: false,
      error: null,
      data: { products: [{ id: '1', name: 'Product 1' }] },
    });

    render(<CoreFunctionalityComponent />);

    // Act & Assert
    expect(screen.getByText('Product 1')).toHaveAttribute('aria-label', 'product-1');
    expect(screen.getByRole('button', { name: /view details/i })).toBeEnabled();
  });
});