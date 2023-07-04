import styled, { css } from 'styled-components';

export const Main = styled.main`
  > header {
    margin-bottom: 32px;
  }
`;

export const Container = styled.div``;

export const ContentSection = styled.div`
  padding-left: 24px;
`;

export const SearchSection = styled.div`
  margin-bottom: 32px;
`;

export const ProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

export const ChartColumn = styled.aside`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.black};
    height: 100%;
  `}
`;

export const ChartHeader = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: 8px 16px;
  `}
`;

export const ChartTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: 600;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const ChartList = styled.ul``;

export const ChartCheckout = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.black};
    padding: 32px 16px;
    display: flex;
    justify-content: center;
  `}
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;