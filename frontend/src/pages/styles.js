import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
`;

export const Container = styled.aside`
    margin: 0px;
    display: grid;
    grid-template-columns: 225px 1fr;
    grid-template-rows: 100px 1fr 100px;
    grid-template-areas: "Logo Header" "Nav Main" "Nav Footer";                                    
    height: 100vh;
    background-color: #F5F5F5;
`;

