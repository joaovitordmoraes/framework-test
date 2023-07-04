import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import { ChartItem } from '.';

describe('<ChartItem />', () => {
  it('should render the ChartItem correctly', () => {
    const onClick = jest.fn();
    renderWithTheme(<ChartItem image="./images/maca.png" name="Maçã" price={5} onClick={onClick} />);

    expect(screen.getByRole('img', { name: 'Imagem de: Maçã' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Imagem de: Maçã' })).toHaveAttribute('src', './images/maca.png');
    expect(screen.getByText('Maçã')).toBeInTheDocument();
    expect(screen.getByText('R$ 5,00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Remover/i })).toBeInTheDocument();
  });

  it('should trigger the onClick event correctly', async () => {
    const onClick = jest.fn();
    renderWithTheme(<ChartItem image="./images/maca.png" name="Maçã" price={5} onClick={onClick} />);

    const button = screen.getByRole('button', { name: /Remover/i });
    
    userEvent.click(button);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});