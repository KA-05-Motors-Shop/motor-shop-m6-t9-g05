import styled from "styled-components";

export const Container = styled.div`
  width: 315px;
  height: 375px;

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
  }
`;

export const UserInfo = styled.div`
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
    background-color: ${({ theme }) => theme.colors.random6};

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
  justify-content: space-between;
  padding: 0.5rem 0 0 0;

  .tags {
    display: flex;

    div + div {
      margin: 0 0.375rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 51px;
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
  }

  .price {
    span {
      font-size: 1rem;
      font-family: "Lexend", sans-serif;
      font-weight: ${({ theme }) => theme.fonts.fontWeight500};
      color: ${({ theme }) => theme.colors.grey1};
    }
  }
`;
