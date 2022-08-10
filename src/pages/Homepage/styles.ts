import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.grey8};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTop = styled.section`
  background: ${({ theme }) => theme.colors.brand2};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 95%;
  height: 95%;
  padding: 15% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > p {
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight700};
    color: ${({ theme }) => theme.colors.grey10};
    text-align: center;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  > span {
    margin-top: 1.75rem;
    margin-bottom: 2.25rem;
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.grey9};
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    font-size: 1rem;
    line-height: 1.75rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 7% 0 10%;
    width: 50%;

    > p {
      font-size: 2.75rem;
      line-height: 3.5rem;
    }
  }
`;

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > button {
    font-size: 1rem;
    margin: 0.5rem;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    > button {
      width: 10rem;
    }
  }
`;

export const SectionLeilao = styled.section`
  width: 95%;
  margin-top: 3rem;
`;

export const SectionVehicles = styled.section`
  width: 95%;
  margin-top: 5rem;
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
