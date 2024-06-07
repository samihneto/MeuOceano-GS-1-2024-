// let validarLogin = (username, password) => {

//   const userValido = "admin";
//   const senhaValida = "12345";

//   if(user === userValido && senha === senhaValida) {
//     return true;
//   } else {
//     return false;
//   }

// let login = 


// };

if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "../pages/login.html"
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"))

let logado = documento.querySelector("#logado");
logado.innerHTML = `Olá $userLogado.nome`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../pages/login.html";
}