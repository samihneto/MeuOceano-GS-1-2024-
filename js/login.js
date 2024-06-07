let listaUsuarios = [
    { user: "admin", senha: "123456" },
    { user: "usersamir", senha: "123456" },
    { user: "userandre", senha: "123456" },
    { user: "userlevy", senha: "123456" },
];

function login(username, password) {
    let message;
    for (let index = 0; index < listaUsuarios.length; index++) {
        const usuario = listaUsuarios[index];
        if (usuario.user === username && usuario.senha === password) {
            let mathRandom = Math.random().toString(16).substr(2);
            let token = mathRandom + mathRandom;
            localStorage.setItem('token', token);
            localStorage.setItem('userLogado', JSON.stringify(usuario));
            message = "Login efetuado com sucesso!";
            window.location.href = "./about.html";
            return;
        } else {
            message = "Credenciais inválidas!";
        }
    }
    console.log(message);
}

let btnLogin = window.document.querySelector(".login__entrar");
btnLogin.addEventListener('submit', ()=>{
    let inputuser = window.document.querySelector("#login__usuario");
    let inputsenha = window.document.querySelector("#login__senha");
    login(inputuser.value, inputsenha.value);
});