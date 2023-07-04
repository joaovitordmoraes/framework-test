import { Button } from 'components/Button';
import { priceFormatter } from 'utils/priceFormatter';

import * as S from './styles';

type ChartItemProps = {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
}

export function ChartItem({ image, name, price, onClick }: ChartItemProps) {
  return (
    <S.Wrapper>
      <S.Product>
        <S.Image src={image} alt={`Imagem de: ${name}`} />
        <S.Content>
          <S.Name>{name}</S.Name>
          <S.Price>{priceFormatter(price)}</S.Price>
        </S.Content>
      </S.Product>
      <S.CTA>
        <Button variant="secondary" onClick={onClick}>Remover</Button>
      </S.CTA>
    </S.Wrapper>
  );
}
