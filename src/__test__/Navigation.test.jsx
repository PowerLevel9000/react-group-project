import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Navigation from '../components/Navigation';

describe('testing the navigation componennt', () => {
  const NavigationTest = () => (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  test('Main wrapper of the navigation bar should be 2', () => {
    render(<NavigationTest />);
    const logoWraper = screen.getAllByRole('menuitem');
    const MenuRapper = screen.getAllByRole('menuitem');
    expect(logoWraper.length + MenuRapper.length).toBe(2);
  });

  test('Main menu elements shoul be 3', () => {
    render(<NavigationTest />);
    const navWrappers = screen.getAllByRole('list');
    expect(navWrappers.length).toBe(3);
  });
});
