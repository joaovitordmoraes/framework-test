import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  > svg {
    position: absolute;
    right: 0;
  }
`;

export const Input =  styled.input`
  ${({ theme }) => css`
    border: 0;
    border-bottom: 1px solid ${theme.colors.black};
    padding-bottom: 4px;
    outline: none;
    font-size: 1.4rem;
    padding-right: 20px;
    width: 100%;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  `}
`;
