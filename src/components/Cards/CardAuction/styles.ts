import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  cursor: grabbing;

  @media screen and (min-width: 1024px) {
    height: 325px;
  }
`;

export const DivImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 250px;
    height: 200px;
    object-fit: cover;
    opacity: 0.7;
  }
`;

export const DivHour = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 110px;
  border-radius: 20px;
  padding: 0.2rem;
  margin: 0.5rem 0 0rem 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.brand1};
  }
  > span {
    font-family: "Lexend", sans-serif;
    font-size: 1rem;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;
  margin: 0.5rem 0 0rem 0.5rem;

  > h2 {
    color: ${({ theme }) => theme.colors.grey10};
    font-family: "Lexend", sans-serif;
    font-size: 1.3rem;
    font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  }

  > p {
    color: ${({ theme }) => theme.colors.grey5};
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
  }
`;

export const DivDetails = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  margin: 0.5rem 0 0rem 0.5rem;
  z-index: 1;

  > div {
    display: flex;
    gap: 1rem;

    span {
      font-family: "Inter", sans-serif;
      color: ${({ theme }) => theme.colors.brand1};
      font-size: 0.8rem;
      font-weight: ${({ theme }) => theme.fonts.fontWeight500};
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.colors.brand4};
      border-radius: 5px;
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.whiteFixed};
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const DivButtons = styled.div`
  background-color: ${({ theme }) => theme.colors.brand1};
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;

    > button:nth-child(1) {
      width: 90px;
    }
  }
`;
