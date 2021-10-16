import styled from "styled-components";

export const Wrapper = styled.section`

`;

export const Container = styled.aside`
    background-color: #fafafa;
    width: 100%;
    height: 100vh;
    display: flex;
    font-family: ${(props) => props.theme.fonts.regular};  
`;

export const MenuLateral = styled.aside`
    display: flex;
    flex-direction: column;
    background-color: #1e3544;
    width: 340px;
`;

export const Landing = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

