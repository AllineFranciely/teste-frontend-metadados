import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Testa o componente Header', () => {
  it('Testa se o botão cart existe', () => {
    render(<Header />);

    const cartButton = screen.getByTestId('cartButton');
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toHaveTextContent('Cart');
  });
});