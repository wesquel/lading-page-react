import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    ${theme}
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 2.5rem;
    }
  `}
`;
