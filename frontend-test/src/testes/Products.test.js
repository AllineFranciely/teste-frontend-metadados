import { render, screen } from '@testing-library/react';
import Products from '../components/Products';

describe('Testa o componente Products', () => {
  it('Testa se o componente possui ao menos 1 produto', () => {
    render(<Products />);

    const product = screen.getByTestId('Product');
    expect(product).toBeInTheDocument();
  });

  it('Testa se o nome dos produtos aparecem na tela', () => {
    render(<Products />);

    const title = screen.getByTestId('TitleProduct');
    expect(title).toBeInTheDocument();
  });

  it('Testa se a imagem dos productos aparece na tela', () => {
    render(<Products />);

    const images = screen.getByTestId('ImgProduct');
    expect(images).toBeInTheDocument();
  });

  it('Testa se o preço dos produtos e a categoria aparecem na tela', () => {
    render(<Products />);

    const price = screen.getByTestId('ProductPrice');
    expect(price).toBeInTheDocument();

    const category = screen.getByTestId('ProductCategory');
    expect(category).toBeInTheDocument();
  });
});