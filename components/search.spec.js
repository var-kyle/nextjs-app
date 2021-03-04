import { render, screen } from '@testing-library/react';

import Search from './search';

it('Renders the search input', () => {
  render(<Search />);
  const input = screen.getByTestId('search-input');

  expect(input.value).toBe('');
});

it('Renders the search input with an existing search', () => {
  const searchString = 'ottawa, ontario';
  render(<Search q={searchString} />);
  const input = screen.getByTestId('search-input');

  expect(input.value).toBe(searchString);
});
