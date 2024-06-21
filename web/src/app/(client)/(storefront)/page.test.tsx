import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home Page', () => {
  it('renders the home page heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: 'Unlocking Code Mastery: Your Hub for Programming Books'
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the "Shop Books" button', () => {
    render(<Home />);
    const shopBooksButton = screen.getByRole('link', { name: /shop books/i });

    expect(shopBooksButton).toBeInTheDocument();

  });

  it('has a correct href', () => {
    render(<Home />);
    const shopBooksButton = screen.getByRole('link', { name: /shop books/i });

    expect(shopBooksButton).toHaveAttribute('href', '/books');
  });

  it('renders the "Explore Docs" link', () => {
    render(<Home />);
    const exploreDocsButton = screen.getByRole('link', { name: /explore docs/i });
    
    expect(exploreDocsButton).toBeInTheDocument();
  });

  it('has a valid GitHub link and _blank target', () => {
    render(<Home />);
    const exploreDocsButton = screen.getByRole('link', { name: /explore docs/i });

    expect(exploreDocsButton).toHaveAttribute('href', 'https://github.com/ivomiyashiro/bookshop');
    expect(exploreDocsButton).toHaveAttribute('target', '_blank');
  });
});
