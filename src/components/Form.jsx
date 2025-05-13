export function Form(){
    return(
        <div>
        <div className="input-box">
            <label>Email</label>
            <input placeholder="Digite o email associado à sua conta" type="email" />
            <i className="bx bxs-user"></i>
        </div>

        <div className="input-box">
            <label>Senha</label>
            <input placeholder="Sua senha" type="password" />
            <i className="bx bxs-lock-alt"></i>
        </div>
        </div>

    )
    

};