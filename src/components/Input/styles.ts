import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${theme.colors.black};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.black};
    border: 0;
    border-bottom: 1px solid ${theme.colors.black};
    padding: 4px 0;
    outline: 0;
  `}
`;