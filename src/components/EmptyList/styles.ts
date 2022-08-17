import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.brand1};
  font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  line-height: 1.2rem;

  @media screen and (min-width: 1024px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;
