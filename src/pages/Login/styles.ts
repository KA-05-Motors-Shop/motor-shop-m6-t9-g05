import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.grey8};
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`

export const DivForm = styled.div`
    background-color: ${({theme}) => theme.colors.whiteFixed};
    width: 95%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const Form = styled.form`
    width: 95%;
    max-width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > button {
        width: 100%;
    }
`

export const DivTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

export const H2 = styled.h2`
    font-size: 1.2rem;
    font-family: 'Lexend', sans-serif;
    font-weight: ${({theme}) => theme.fonts.fontWeight500};
    color: #000;
`

export const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    > a {
        text-decoration: none;
        font-size: 0.8rem;
        font-family: 'Inter', sans-serif;
        color: ${({theme}) => theme.colors.grey2};
        font-weight: ${({theme}) => theme.fonts.fontWeight500};
    }
`

export const Span = styled.span`
        font-size: 0.8rem;
        font-family: 'Inter', sans-serif;
        color: ${({theme}) => theme.colors.grey2};
        font-weight: ${({theme}) => theme.fonts.fontWeight400};
`