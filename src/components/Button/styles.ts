import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ButtonTypes = {
} & Pick<ButtonProps, 'variant' | 'fullWidth'>;

const ButtonModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
  `,
};

export const Wrapper = styled.button<ButtonTypes>`
  ${({ theme, fullWidth, variant }) => css`
    border-radius: 8px;
    border: 0;
    padding: 8px 16px;
    font-size: 1.6rem;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${fullWidth && ButtonModifiers.fullWidth()}
    ${variant && ButtonModifiers[variant](theme)}
  `}
`;