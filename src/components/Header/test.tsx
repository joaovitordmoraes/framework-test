import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the header correctly', () => {
    const onClick = jest.fn();
    renderWithTheme(<Header buttonLabel="Entrar" onClick={onClick} />);

    expect(
      screen.getByRole('button', { name: /Entrar/i })
    ).toBeInTheDocument();
  });

  it('should trigger the header onClick correctly', async () => {
    const onClick = jest.fn();
    renderWithTheme(<Header buttonLabel="Entrar" onClick={onClick} />);

    const button = screen.getByRole('button', { name: /Entrar/i });
    
    userEvent.click(button);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});