import React from 'react';
import { render } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';

import { Date } from './date';

it('Renders the date in the correct format', () => {
  const dateString = '2021/05/1';
  const { container } = render(<Date dateString={dateString} />);
  expect(container).toEqual('2021-05-1');
});
