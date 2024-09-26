import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '../app/page';

describe('Page', () => {
  it('renders an image', () => {
    render(<Page />);

    const logo = screen.getByAltText('Next.js logo');

    expect(logo).toBeInTheDocument();
  });
});
