import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Button } from '.';
import theme from 'styles/theme';

describe('<Button />', () => {
  it('should render the primary button by default', () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      'background-color': theme.colors.black,
      'color': theme.colors.white,
      'border': `1px solid ${theme.colors.black}`,
    });
  });

  it('should render the secondary button', () => {
    renderWithTheme(<Button variant="secondary">Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      'border': `1px solid ${theme.colors.black}`,
      'color': theme.colors.black,
      'background-color': theme.colors.white
    });
  });

  it('should render the button with full width', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      'width': '100%',
    });
  });

  it('should render the button as a link', () => {
    renderWithTheme(<Button as="a" href="/test-link">Buy now</Button>);

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute('href', '/test-link');
  });
});