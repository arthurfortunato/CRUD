import styled from "styled-components";

export const Logo = styled.img`
    height: 100px;
`;

export const Nav = styled.aside`
    box-shadow: ${(props) => props.theme.colors.shadowLateral};

    a {
        display: block;
        text-decoration: none;
        color: #fff;
        padding: 15px;
        font-weight: 300;
    }

    a:hover {
        background: ${(props) => props.theme.colors.gradient};
    }
`;

export const Header = styled.header`
    height: 100px;
    background-color: #fff;

    .header{
        font-size: 1.9em;
        box-shadow: ${(props) => props.theme.colors.shadow};
        display: flex;
        flex-direction: column;
        padding: 0px 15px;
    }

    p {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 40px;
    }
`;

export const Main = styled.aside`
    height: 100%;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 45px;
    background-color: #fff;
    padding: 0 25px;
    box-shadow: ${(props) => props.theme.colors.shadow};
    
`;