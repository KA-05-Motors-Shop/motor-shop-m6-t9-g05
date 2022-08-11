import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  backdrop-filter: saturate(180%);
  -webkit-backdrop-filter: saturate(180%);
  background-color: rgba(17, 25, 40, 0.3);
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 95%;
  max-width: 520px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  margin-top: 2rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  > span {
    font-size: 1rem;
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: ${({ theme }) => theme.colors.grey1};
  }

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.grey4};
    }
  }
`;

export const DivMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  padding: 15px;

  > p:nth-child(1) {
    font-size: 1rem;
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: ${({ theme }) => theme.colors.grey1};
  }

  > p:nth-child(2) {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    color: ${({ theme }) => theme.colors.grey2};
    margin-top: 1rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  gap: 1rem;

  > button {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;

    > button:nth-child(1) {
      width: 138px;
    }

    > button:nth-child(2) {
      width: 262px;
    }
  }
`;
