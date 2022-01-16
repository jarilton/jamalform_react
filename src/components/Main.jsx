import styles from './Main.css'

export default function Main() {
    return (
        <>
            <div className={styles.div}>
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
                    <select>
                        Sexo:
                        <option type="checkbox" name="Sexo">Masculino</option> 
                        <option type="checkbox" name="Sexo">Feminino</option> 
                        <option type="checkbox" name="Sexo">Homosexual</option> 
                        <option type="checkbox" name="Sexo">Transsexual</option> 
                        <option type="checkbox" name="Sexo">LGBT</option> 
                    </select>
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
                    <button>Salvar</button>
                    <button>Editar</button>
                    <button>Excluir</button>
                </form>
            </div>
        </>
    );
}
        

