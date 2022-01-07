import Styles from './Styles.css'

function App() {
  return (
    <div>
      <h1>Formulário do Jamal</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="name" placeholder="Digite seu nome"></input>
        </label>
        <label>
          Sobrenome:
          <input type="text" name="sobrenome" placeholder="Digite seu sobrenome"></input>
        </label>
        <label>
          Idade:
          <input type="text" name="idade" placeholder="Digite sua idade"></input>
        </label>
        <label>
          Sexo:
          <input type="checkbox" name="Sexo"></input> Masculino
          <input type="checkbox" name="Sexo"></input> Feminino
        </label>
        <label>
          Email:
          <input type="text" name="email" placeholder="Digite seu email"></input>
        </label>
        <label>
          Senha:
          <input type="password" placeholder="Digite sua senha"></input>
        </label>
        <label>
          Confirme sua senha:
          <input type="password" placeholder="Confirme sua senha"></input>
        </label>
      </form>
    </div>
  );
}

export default App;
