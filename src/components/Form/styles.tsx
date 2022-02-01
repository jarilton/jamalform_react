import styled from "styled-components";

export const Container = styled.form`
    margin-top: -45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: 28px;
        margin-bottom: 25px;
    }
    
    input {
       
        padding: 15px;
        height: 2rem;
        border-radius: 0.25rem;

        border: 1px solid #d3d3d3;
        background: #d3d3d3;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    select {
        margin: 10px;
        padding: 8px;
        width: 228px;
        background: #d3d3d3;
    }


        button {
            margin: 20px;
            padding: 10px;
            width: 80px;
            border-radius: 25px;
            background-color: blue;
            color: #fff;
        }
    



`