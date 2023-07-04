import { Button } from 'components/Button';

import * as S from './styles';

type ProductCardProps = {
  image: string;
  name: string;
  onClick: () => void;
  price: number;
}

export function ProductCard({ image, name, onClick, price }: ProductCardProps) {
  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={image} alt={`Imagem de: ${name}`} />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.ProductName>{name}</S.ProductName>
        <S.CTA>
          <S.Price>{priceFormatter}</S.Price>
          <Button onClick={onClick}>Comprar</Button>
        </S.CTA>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
