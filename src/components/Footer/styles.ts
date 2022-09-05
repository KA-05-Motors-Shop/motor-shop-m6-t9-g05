import styled from "styled-components";

export const Container = styled.footer`
  background-color: #000;
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > span {
    color: #fff;
    font-size: 0.8rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
  }

  > button {
    background-color: ${({ theme }) => theme.colors.grey1};
    border-radius: 5px;
    border: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      background-color: ${({ theme }) => theme.colors.grey2};
    }

    svg {
      color: #fff;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 200px;
    flex-direction: row;
    justify-content: space-between;

    > img {
      padding: 0 1rem 0 5%;
    }

    > button {
      margin: 0 5% 0 1.375rem;
    }
  }
`;
