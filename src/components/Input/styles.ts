import styled from "styled-components";

interface ContainerProps {
  width?: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.8rem;
  width: ${({ width }) => width}%;
`;

export const InputContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey8};
  border-radius: 0.3rem;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${({ theme }) => theme.colors.grey8};
  }

  :focus-within {
    border: 1px solid ${({ theme }) => theme.colors.brand2};
  }

  > input {
    width: 100%;
    padding: 0.6rem;
    border: none;
    background-color: transparent;
    font-size: 0.9rem;

    :focus {
      outline: none;
      border: none;
    }

    ::placeholder {
      font-family: "Inter", sans-serif;
      font-size: 0.9rem;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.fontWeight500};
  font-family: "Inter", sans-serif;
  margin-bottom: 0.7rem;
`;

export const Error = styled.span`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.fontWeight500};
  font-family: "Inter", sans-serif;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.alert1};
`;
