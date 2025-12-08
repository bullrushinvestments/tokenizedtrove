import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message on API failure', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('API Error'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByText(/api error/i)).toBeInTheDocument();
  });

  test('renders data correctly when API returns success', async () => {
    const mockData = { name: 'Product A', price: '$10' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());
  });

  test('handles user interaction with product cards correctly', async () => {
    const mockData = { name: 'Product A' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/product a/i));
    expect(window.location.href).toBe('/productA'); // Assuming navigation to product page
  });

  test('ensures accessibility features are properly implemented', () => {
    const mockData = { name: 'Product A' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/product a/i)).toHaveAttribute('aria-label', /product a/i);
  });

  test('handles edge cases such as empty data response', async () => {
    const mockData = {};
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message on API failure', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('API Error'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByText(/api error/i)).toBeInTheDocument();
  });

  test('renders data correctly when API returns success', async () => {
    const mockData = { name: 'Product A', price: '$10' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());
  });

  test('handles user interaction with product cards correctly', async () => {
    const mockData = { name: 'Product A' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/product a/i));
    expect(window.location.href).toBe('/productA'); // Assuming navigation to product page
  });

  test('ensures accessibility features are properly implemented', () => {
    const mockData = { name: 'Product A' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/product a/i)).toHaveAttribute('aria-label', /product a/i);
  });

  test('handles edge cases such as empty data response', async () => {
    const mockData = {};
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});