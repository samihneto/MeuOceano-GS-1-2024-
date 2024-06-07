const btnLogin = document.querySelector(".login__entrar");

let listaUsuarios = [
    { user: "admin", senha: "123456" },
    { user: "usersamir", senha: "123456" },
    { user: "userandre", senha: "123456" },
    { user: "userlevy", senha: "123456" },
];

const login = (username, password) => {
    for(let index = 0; index < listaUsuarios.length; index++) {
        if (username === listaUsuarios[index].user && password === listaUsuarios[index].senha) {
            let mathRandom = Math.random().toString(16).substr(2);
            let token = mathRandom + mathRandom;
            localStorage.setItem('token', token);
            localStorage.setItem('userLogado', JSON.stringify(listaUsuarios[index]));
            window.location.href = "../index.html";
            return;
        }
    }
    alert("Credenciais inválidas!");
};

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const inputuser = document.querySelector("#login__usuario").value;
    const inputsenha = document.querySelector("#login__senha").value;
    login(inputuser, inputsenha);
});