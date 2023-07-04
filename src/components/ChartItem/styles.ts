import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.black};
    }
  `}
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const Content = styled.div``;

export const Name = styled.strong`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.black};
    display: block;
    margin-bottom: 4px;
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    color: ${theme.colors.black};
  `}
`;

export const CTA = styled.div``;