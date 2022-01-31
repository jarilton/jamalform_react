import { Container, Content } from "./styles";

export function Nav() {
    return (
        <Container>
            <Content>
                <ul>
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#diversos">Diversos</a></li>
                    <li><a href="#quemSomos">Quem somos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </Content>
        </Container>
    )
}