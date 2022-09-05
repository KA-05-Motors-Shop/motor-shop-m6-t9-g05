import styled from "styled-components";

interface ContentProps {
  bgColor?: string;
}

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.grey8};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionUser = styled.section`
  background: ${({ theme }) => theme.colors.brand1};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.brand1} 50%,
    ${({ theme }) => theme.colors.grey8} 50%
  );
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivUser = styled.div`
  background-color: ${({ theme }) => theme.colors.grey10};
  width: 90%;
  height: 320px;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    width: 70%;
    height: 270px;
  }
`;

export const SpanName = styled.span`
  font-family: "Lexend", sans-serif;
  font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  font-size: 1.2rem;

  > span {
    background-color: ${({ theme }) => theme.colors.brand4};
    color: ${({ theme }) => theme.colors.brand1};
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    border-radius: 5px;
    padding: 8px;
  }
`;

export const Content = styled.div<ContentProps>`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-family: "Inter", sans-serif;
      color: ${({ theme }) => theme.colors.whiteFixed};
      font-weight: ${({ theme }) => theme.fonts.fontWeight500};
      font-size: 1.9rem;
    }
  }

  > p {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.grey2};
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    font-size: 1rem;
  }
`;

export const SectionLeilao = styled.section`
  width: 90%;
  margin-top: 3rem;
`;

export const SectionVehicles = styled.section`
  width: 90%;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export const UlVehicles = styled.ul`
  display: flex;
  gap: 1.5rem;
  background-color: red;

  li {
    min-width: 300px;
    width: 300px;
    margin-right: 1rem;
    scroll-snap-align: center;
    border-radius: 5px;
  }
`;

export const H2 = styled.h2`
  font-family: "Lexend", sans-serif;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  color: #000;
  margin: 1.5rem 0 1.5rem 0;
`;
