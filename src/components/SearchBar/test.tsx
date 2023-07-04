import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { SearchBar } from '.';

import theme from 'styles/theme';

describe('<SearchBar />', () => {
  it('should render the Search Input correctly', () => {
    renderWithTheme(<SearchBar defaultValue="Some product" />);

    expect(
      screen.getByDisplayValue('Some product')
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue('Some product')
    ).toHaveAttribute('type', 'search');

    expect(screen.getByDisplayValue('Some product')).toHaveStyle({
      'border-bottom': `1px solid ${theme.colors.black}`,
      'border': 0,
      'padding-bottom': '4px'
    });
  });
});
