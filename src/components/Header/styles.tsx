import styled from "styled-components";

export const Container = styled.header`
    background-color: #8B8B7A;
    
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 50px;

    h1 {
        margin: 5px;
        padding: 20px;
    }

    button {
        border-radius: 25px;
        background-color: #000;
        color: #fff;
        margin-right: 20px;
        padding: 20px;
        font-size: medium;
    }
`