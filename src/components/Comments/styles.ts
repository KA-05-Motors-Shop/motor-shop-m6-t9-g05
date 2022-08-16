import styled from "styled-components";

interface DivProps {
  bgColor?: string;
}

export const Container = styled.li`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;

export const DivName = styled.div<DivProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  > div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.whiteFixed};
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  }

  > span:nth-child(2) {
    font-size: 0.8rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: ${({ theme }) => theme.colors.grey1};

    ::after {
      content: "•";
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.grey4};
    }
  }

  > span:nth-child(3) {
    font-family: "Inter", sans-serif;
    font-size: 0.7rem;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    color: ${({ theme }) => theme.colors.grey4};
  }
`;

export const DivMessage = styled.div`
  white-space: normal;

  > p {
    word-break: break-all;
    font-size: 0.9rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    color: ${({ theme }) => theme.colors.grey2};
    line-height: 1rem;
    margin-top: 1rem;
  }
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DivTextArea = styled.div`
  width: 100%;
  margin-top: 1rem;
  position: relative;

  > button {
    position: absolute;
    top: -22px;
    right: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  > textarea {
    width: 99%;
    border: 1px solid ${({ theme }) => theme.colors.grey4};
    border-radius: 0.3rem;
    transition: 0.5s;
    resize: none;
    transition: 0.5s;

    :hover {
      background-color: ${({ theme }) => theme.colors.grey8};
    }

    :focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.brand2};
    }
  }
`;
