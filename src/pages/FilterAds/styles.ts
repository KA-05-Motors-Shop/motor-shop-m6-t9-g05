import styled, { css } from "styled-components";

interface CardProps {
  auction?: boolean;
}

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;

export const Section = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-family: "Lexend", sans-serif;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  color: #000;
  margin: 1.5rem 0 1.5rem 0;
`;

export const DivSection = styled.div<CardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  ${({ auction }) =>
    auction
      ? css`
          > div {
            max-width: 500px;
          }
        `
      : css`
          > div {
            max-width: 350px;
          }
        `}
`;
