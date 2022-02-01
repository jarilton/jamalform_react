import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function Form() {

    useEffect(() => {
        api.get('form')
            .then(response => response.data)
    })

    return (
        <Container>
            <h2>Cadastrar Clientes</h2>
            <input 
                type="text" 
                placeholder="Nome"
            />
            <input 
                type="text" 
                placeholder="Sobrenome"
            />          
            <input 
                type="text"  
                placeholder="Idade"
            />            
            <select>
                <span>Sexo:</span>
                <option>Masculino</option> 
                <option>Feminino</option> 
                <option>Homosexual</option> 
                <option>Transsexual</option> 
                <option>LGBT</option> 
            </select>           
            <input 
                type="text"  
                placeholder="Email"
            />                     
            <input 
                type="password" 
                placeholder="Senha"
            /> 
            <input 
                type="password" 
                placeholder="Confirme a senha"
            />          
            <button>Salvar</button>    
        </ Container>
    );
}
        

