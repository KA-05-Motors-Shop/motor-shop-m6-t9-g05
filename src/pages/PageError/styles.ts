import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey8};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const DivIcon = styled.div`
  width: 95%;
  max-width: 400px;

  > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.alert1};
  }
`;

export const Div = styled.div`
  width: 95%;
  height: 170px;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const H1 = styled.h1`
    font-size: 3rem;
    font-family: 'Lexend', sans-serif;
    font-weight: ${({theme}) => theme.fonts.fontWeight600};
    color: ${({theme}) => theme.colors.grey2};
`;

export const P = styled.p`
    font-size: 0.8rem;
    font-family: 'Inter', sans-serif;
    font-weight: ${({theme}) => theme.fonts.fontWeight500};
    color: ${({theme}) => theme.colors.grey1};

    @media screen and (min-width: 768px){
        font-size: 1.5rem;
    }
`;

export const Link = styled.a`
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: ${({theme}) => theme.colors.grey1};
    border: 1px solid ${({theme}) => theme.colors.grey0};
    padding: 1rem;
    border-radius: 5px;
    transition: 0.5s;

    :hover {
        color: ${({theme}) => theme.colors.brand1};
    }
`;
