import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Input } from '.';

import theme from 'styles/theme';

describe('<Input />', () => {
  it('should render the Input correctly', () => {
    renderWithTheme(<Input label="Name" defaultValue="John Doe" />);

    expect(
      screen.getByLabelText('Name')
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue('John Doe')
    ).toBeInTheDocument();

    expect(screen.getByDisplayValue('John Doe')).toHaveStyle({
      'border-bottom': `1px solid ${theme.colors.black}`,
      'border': 0,
      'padding': '4px 0'
    });
  });
});