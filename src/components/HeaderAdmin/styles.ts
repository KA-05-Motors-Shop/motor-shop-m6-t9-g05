import styled, { css } from "styled-components";

interface HeaderProps {
  isActive?: boolean;
  isOpen?: boolean;
  bgColor?: string;
}

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.grey10};
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;

export const ContainerLeft = styled.div<HeaderProps>`
  display: flex;
  height: 100%;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;

  > img {
    cursor: pointer;
  }

  svg {
    font-size: 1.9rem;
    cursor: pointer;
  }

  .active {
    display: flex;
    width: 100%;
    position: absolute;
    border-top: 1px solid ${({ theme }) => theme.colors.grey6};
    top: 80px;
    left: 0;
    -webkit-box-shadow: 0px 13px 31px -7px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 13px 31px -7px rgba(0, 0, 0, 0.19);
    z-index: 2;

    ul {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.whiteFixed};
    }

    li {
      padding: 1.5rem 1rem;
    }

    li a {
      font-size: 1rem;
      text-decoration: none;
      font-family: "Inter", sans-serif;
      font-weight: ${({ theme }) => theme.fonts.fontWeight600};
      color: ${({ theme }) => theme.colors.grey2};
    }

    li:nth-child(3) {
      padding: 1.5rem 1rem 2rem 1rem;
    }

    li:nth-child(4) {
      padding: 2rem 1rem 1rem 1rem;
      border-top: 1px solid ${({ theme }) => theme.colors.grey6};
    }

    li button {
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      font-weight: ${({ theme }) => theme.fonts.fontWeight600};
      color: ${({ theme }) => theme.colors.grey2};
      background-color: transparent;
      border: none;
    }
  }

  .inactive {
    display: none;
  }

  @media (min-width: 768px) {
    flex: 1;
    padding: 0 1rem 0 5%;

    svg {
      display: none;
    }

    .active {
      display: none;
    }
  }
`;

export const ContainerRight = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    padding-right: 5%;
    padding-left: 1rem;
    gap: 1rem;
    width: 180px;
    height: 100%;
    position: relative;
    align-items: center;
    border-left: 2px solid ${({ theme }) => theme.colors.grey6};
  }

  > span {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: ${({ theme }) => theme.fonts.fontWeight400};
    color: ${({ theme }) => theme.colors.grey2};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DivName = styled.div<HeaderProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: ${({ theme }) => theme.fonts.fontWeight700};
  color: ${({ theme }) => theme.colors.whiteFixed};
  cursor: pointer;
`;

export const DivLink = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    a {
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: ${({ theme }) => theme.fonts.fontWeight600};
      margin: 0 1.375rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey2};
    }
  }
`;

export const DropMenu = styled.div<HeaderProps>`
  display: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
      width: 150px;
      position: absolute;
      top: 70px;
      right: 5px;
      z-index: 2;
      background-color: ${({ theme }) => theme.colors.grey9};
      height: 130px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1rem;
      border-radius: 8px;

      button {
        background-color: transparent;
        border: none;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.grey2};
        font-weight: ${({ theme }) => theme.fonts.fontWeight400};
        text-align: start;
        cursor: pointer;
      }
    `}
`;
