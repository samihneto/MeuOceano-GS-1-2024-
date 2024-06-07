//Recuperando o tooken do usuario
let tokenUser = sessionStorage.getItem("token");



//Recuperando o objeto do localStorage
const usuario = JSON.parse(localStorage.getItem("usuario-logado"));


if(usuario){
    //Mensagem de Boas Vindas
    const msgWelcome = document.querySelector("#msg-welcome");
    msgWelcome.innerText = usuario.email;

    //LOGOUT
    const logoutUser = document.querySelector("#logout-user");
    logoutUser.addEventListener("click", ()=>{
        localStorage.removeItem("usuario-logado");
        
        window.location.href = "../index.html";
    });
} else {
    window.location.href = "../index.html";
}