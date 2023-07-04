import { Button } from 'components/Button';

import * as S from './styles';

type HeaderProps = {
  onClick: () => void;
  buttonLabel: string;
}

export function Header({ onClick, buttonLabel }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <Button variant="secondary" onClick={onClick}>{buttonLabel}</Button>
      </S.Container>
    </S.Wrapper>
  );
}
