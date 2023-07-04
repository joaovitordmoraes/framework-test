import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  as?: 'a' | 'button';
} & ButtonTypes;

export function Button({ children, fullWidth, variant = 'primary', as = 'button', ...props }: ButtonProps) {
  return (
    <S.Wrapper
      fullWidth={fullWidth}
      variant={variant}
      as={as}
      {...props}
    >
      <span>{children}</span>
    </S.Wrapper>
  );
}
