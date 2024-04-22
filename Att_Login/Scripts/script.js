function SalvarDados(){
    var NomeLogin = document.getElementById("nome").value;
    var SenhaLogin = document.getElementById("nome").value;

    var LoginNome = "Mateus"
    var LoginSenha = "JEC"

    if((NomeLogin === LoginNome)& (SenhaLogin === LoginSenha)){

    window.location.href = "prox.html";

    }else{
        alert ("Usuário ou senha incorreto!");
    }
    

}

function MostrarDados(){
alert("Nome: Mateus | Senha: JEC")
}
