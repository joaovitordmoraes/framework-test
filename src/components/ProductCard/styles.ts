import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.black};
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  max-width: 380px;
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    border-top: 1px solid ${theme.colors.black};
  `}
`;

export const ProductName = styled.h2``;

export const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.strong``;