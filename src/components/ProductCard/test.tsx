import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import { ProductCard } from '.';

describe('<ProductCard />', () => {
  it('should render the Product Card correctly', () => {
    const onClick = jest.fn();
    renderWithTheme(<ProductCard image="./images/maca.png" name="Maçã" price={5} onClick={onClick} />);

    expect(screen.getByRole('img', { name: 'Imagem de: Maçã' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Imagem de: Maçã' })).toHaveAttribute('src', './images/maca.png');
    expect(screen.getByText('Maçã')).toBeInTheDocument();
    expect(screen.getByText('R$ 5,00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Comprar/i })).toBeInTheDocument();
  });

  it('should trigger the onClick event correctly', async () => {
    const onClick = jest.fn();
    renderWithTheme(<ProductCard image="./images/maca.png" name="Maçã" price={5} onClick={onClick} />);

    const button = screen.getByRole('button', { name: /Comprar/i });
    
    userEvent.click(button);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});