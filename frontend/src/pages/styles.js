import styled from "styled-components";

export const Wrapper = styled.section`
`;

export const Container = styled.aside`
    background-color: #fafafa;
    width: 100%;
    height: 100vh;
    display: flex;
    font-family: ${(props) => props.theme.fonts.regular};  

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

`;

export const MenuLateral = styled.aside`
    display: flex;
    flex-direction: column;
    background-color: #1e3544;
    width: 240px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`;

export const Landing = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

