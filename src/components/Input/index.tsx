import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ label, ...props }: InputProps) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Input id={label} {...props} />
    </S.Wrapper>
  );
}
