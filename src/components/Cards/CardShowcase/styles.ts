import styled from "styled-components";

interface Props {
  bgColor?: string
}

export const Container = styled.div`
  width: 100%;
  height: 385px;
  cursor: grabbing;

  strong {
    display: block;
    font-size: 1rem;
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight600};
    color: ${({ theme }) => theme.colors.grey1};
    padding: 1rem 0 0.5rem 0;
  }

  p {
    display: block;
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    color: ${({ theme }) => theme.colors.grey2};
    line-height: 1.3rem;
    padding: 0.5rem 0;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey7};

  img {
    width: 262px;
    filter: drop-shadow(5px 5px 3px #00000073);
    object-fit: cover;
  }
`;

export const UserInfo = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  > span {
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: ${({ theme }) => theme.colors.grey2};
    margin-left: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};

    span {
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
      font-weight: ${({ theme }) => theme.fonts.fontWeight500};
      color: ${({ theme }) => theme.colors.whiteFixed};
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0 0 0;
`;

export const DivTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  div:not(:nth-child(3)) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.brand4};
    border-radius: 4px;

    span {
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
      font-weight: ${({ theme }) => theme.fonts.fontWeight500};
      color: ${({ theme }) => theme.colors.brand1};
    }
  }
`;

export const DivPrice = styled.div`
  margin-left: auto;

  span {
    font-size: 1rem;
    font-family: "Lexend", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight500};
    color: ${({ theme }) => theme.colors.grey1};
  }
`;

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

`;
