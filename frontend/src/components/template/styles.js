import styled from "styled-components";

export const Logo = styled.img`
    height: 100px;
    width: 15%;
    background-color: #1B2731;
`;

export const Header = styled.header`
    height: 100px;
    background-color: #fff;
    display: flex;

    .header{
        font-size: 1.9em;
        box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0px 15px;
    }

    p{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 40px;
    }
    
`;


export const Nav = styled.aside`
    display: flex;
`;

export const Main = styled.aside`
    height: 100vh;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
`;