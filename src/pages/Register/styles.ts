import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey8};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

export const DivForm = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 95%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const DivTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  > h2 {
    padding: 1rem;
    font-size: 1.2rem;
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: #000;
  }
`;

export const DivInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > label {
    width: 100%;
    margin-left: 17px;
    font-size: 0.9rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: #000;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  div,
  div + div {
    margin-bottom: 1rem;
  }
`;

export const DivAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > label {
    width: 100%;
    margin-left: 17px;
    font-size: 0.9rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: #000;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  div,
  div + div {
    margin-bottom: 1rem;
  }
`;

export const DivState = styled.div`
  width: 95%;
  display: flex;
  gap: 1rem;
`;

export const DivNumber = styled.div`
  width: 95%;
  display: flex;
  gap: 1rem;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: flex-start;

  > label {
    width: 100%;
    font-size: 0.9rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: #000;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;

    > button {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
`;

export const DivPassword = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  div,
  div + div {
    margin-bottom: 1rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;

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

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  > button {
    width: 100%;
    max-width: 361px;
  }
`;
