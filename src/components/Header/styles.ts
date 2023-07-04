import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.black};
    padding: 16px;
  `}
`;

export const Container = styled.div`
  max-width: 1360px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;