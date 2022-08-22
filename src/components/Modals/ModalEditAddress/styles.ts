import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  backdrop-filter: saturate(180%);
  -webkit-backdrop-filter: saturate(180%);
  background-color: rgba(17, 25, 40, 0.3);

  ${({ isOpen }) =>
    isOpen &&
    css`
      overflow-y: scroll;
    `}
`;

export const ContainerForm = styled.div`
  width: 95%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin-top: 1rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
`;

export const DivTitle = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin-top: 1rem;

  > span {
    font-family: "Lexend", sans-serif;
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
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

export const DivInfos = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;

  > div {
    margin-top: 1rem;
  }

  > label {
    font-family: "Lexend", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    margin-top: 1rem;

    :first-child {
      margin-bottom: 1rem;
    }
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const DivFooter = styled.div`
  width: 100%;
  display: block;

  > div {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    > button {
      :first-child {
        margin-right: 10px;
      }
    }

    @media screen and (min-width: 768px) {
      justify-content: flex-end;
    }
  }
`;
