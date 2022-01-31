import styled from "styled-components";

export const Container = styled.main`
    background-color: #EEEED1;
    margin-top: -40rem;
    margin-left: 15%;
    height: 100vh;

`

export const Content = styled.div`

    form {
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        label {
            margin: 20px;
            padding: 10px;
        }

        button {
            border-radius: 25px;
            background-color: blue;
            color: #fff;

            &.excluir {
                background-color: red;
            }
        }
    }



`