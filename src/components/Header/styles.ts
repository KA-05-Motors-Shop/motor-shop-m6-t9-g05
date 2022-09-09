import styled from "styled-components";

interface HeaderProps {
  isActive?: boolean;
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
    z-index: 1;
    -webkit-box-shadow: 0px 13px 31px -7px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 13px 31px -7px rgba(0, 0, 0, 0.19);

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
      width: 100%;
      padding: 0.75rem 1.75rem;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: ${({ theme }) => theme.fonts.fontWeight600};
      background: ${({ theme }) => theme.colors.whiteFixed};
      border: 1px solid ${({ theme }) => theme.colors.grey4};
      border-radius: 4px;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        background-color: ${({ theme }) => theme.colors.grey8};
      }
    }
  }

  .inactive {
    display: none;
  }

  @media (min-width: 768px) {
    flex: 1; //max de espaço
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
    height: 100%;
    padding: 0 5% 0 1.375rem;
    align-items: center;
    border-left: 2px solid ${({ theme }) => theme.colors.grey6};
  }

  > button:nth-child(1) {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.fontWeight600};
    margin: 0 1.375rem 0 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.grey2};
    background-color: transparent;
    cursor: pointer;
  }

  > button:nth-child(2) {
    padding: 0.75rem 1.75rem;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.fontWeight600};
    background: ${({ theme }) => theme.colors.whiteFixed};
    border: 1px solid ${({ theme }) => theme.colors.grey4};
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      background-color: ${({ theme }) => theme.colors.grey8};
    }
  }
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
