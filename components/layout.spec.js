import { render, screen } from '@testing-library/react';

import Layout from './layout';

it('Page layout contains a heading', () => {
  render(<Layout />);
  const heading = screen.getByTestId('heading');

  expect(heading.textContent).toBe('Earth');
});

it('Renders all the children passed in', () => {
  const Test = () => (
    <>
      <div>some content</div>
    </>
  );
  render(<Layout children={<Test />} />);
  const main = screen.getByTestId('main');

  expect(main.childElementCount).toBeGreaterThan(0);
});
