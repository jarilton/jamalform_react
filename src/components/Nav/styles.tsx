import styled from "styled-components";

export const Container = styled.nav`
    background-color: #8B8B7A;
    width: 15%;
    height: 100vh;
` 

export const Content = styled.div`
    
    ul {
        padding: 20px;
        list-style-type: none;

        li {
            margin: 30px;
            
            a {
                color: #000;
                text-decoration: none;

                &:hover {
                    transition: 0ms.25s;
                    filter: brightness(0.9);
                }
            }
        }
    }
    

`