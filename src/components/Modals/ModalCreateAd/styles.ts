import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  backdrop-filter: saturate(180%);
  -webkit-backdrop-filter: saturate(180%);
  background-color: rgba(17, 25, 40, 0.3);
`;

export const ContainerForm = styled.div`
  width: 95%;
  max-width: 500px;
  height: 100%;
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

export const DivTypeAd = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  > label {
    font-family: "Lexend", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
  }

  > div {
    margin-top: 1rem;
    width: 100%;
    display: flex;

    > button:first-child {
      margin-right: 10px;
    }
  }
`;

export const DivTypeVehicle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;

  > label {
    font-family: "Lexend", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
  }

  > div {
    margin-top: 1rem;
    width: 100%;
    display: flex;

    > button:first-child {
      margin-right: 10px;
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

  > label {
    font-family: "Lexend", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};

    :first-child {
      margin-bottom: 1rem;
    }
  }

  div:nth-child(6) {
    margin-bottom: 1rem;
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

    > button {
      width: 50%;

      :first-child {
        margin-right: 10px;
      }
    }

    @media screen and (min-width: 768px) {
      margin-left: 10rem;
      justify-content: flex-end;

      > button:nth-child(2) {
        width: 70%;
      }
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-family: "Lexend", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
  }
`;

export const TextArea = styled.textarea`
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.grey8};
  border-radius: 0.3rem;
  transition: 0.5s;
  resize: none;
  transition: 0.5s;
  padding-left: 8px;
  padding-top: 8px;

  :hover {
    background-color: ${({ theme }) => theme.colors.grey8};
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.brand2};
  }

  ::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
  }
`;

export const DivButton = styled.div`
  margin-top: 1rem;
`;


export const DivExtraInputs = styled.div`

  div:first-child {
    margin-top: 1rem;
  }

  div + div {
      margin-top: 1rem;
  }

`