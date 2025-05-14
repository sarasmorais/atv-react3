export function Form(){
    return(
        <div>
        <div className="input-box">
            <label for="email">Email</label>
            <input id="email" placeholder="Digite o email associado à sua conta" type="email" />
        </div>

        <div className="input-box">
            <label for="password">Senha</label>
            <input id="password" placeholder="Sua senha" type="password" />
        </div>
        </div>

    )
    

};