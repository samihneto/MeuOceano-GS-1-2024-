// // let btn = document.querySelector('.fa-eye')

// btn.addEventListener('click', ()=>{
//   let inputSenha = document.querySelector('#login__senha')
  
//   if(inputSenha.getAttribute('type') == 'password'){
//     inputSenha.setAttribute('type', 'text')
//   } else {
//     inputSenha.setAttribute('type', 'password')
//   }
// })

// function entrar(){
//   let usuario = document.querySelector('#login__usuario')

  
//   let senha = document.querySelector('#login__senha')
  
//   let msgError = document.querySelector('#msgError')
//   let listaUser = []
  
//   let userValid = {
//     nome: 'admin',
//     user: 'admin',
//     senha: '12345'
//   }
  
//   listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
//   listaUser.forEach((item) => {
//     if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
//       userValid = {
//          nome: item.nomeCad,
//          user: item.userCad,
//          senha: item.senhaCad
//        }
      
//     }
//   })
   
//   if(usuario.value == userValid.user && senha.value == userValid.senha){
//     window.location.href = './index.html'
    
//     let mathRandom = Math.random().toString(16).substr(2)
//     let token = mathRandom + mathRandom
    
//     localStorage.setItem('token', token)
//     localStorage.setItem('userLogado', JSON.stringify(userValid))
//   } else {
//     userLabel.setAttribute('style', 'color: red')
//     usuario.setAttribute('style', 'border-color: red')
//     senhaLabel.setAttribute('style', 'color: red')
//     senha.setAttribute('style', 'border-color: red')
//     msgError.setAttribute('style', 'display: block')
//     msgError.innerHTML = 'Usuário ou senha incorretos'
//     usuario.focus()
//   }
  
// }


let listaUsuarios = [
    { user: "admin", senha: "123456" },
    { user: "usersamir", senha: "123456" },
    { user: "userandre.com", senha: "123456" },
    { user: "userlevy", senha: "123456" },
  ];

  function login(username, password) {
    let message
    for (let index = 0; index < listaUsuarios.length; index++) {
        const usuario = listaUsuarios[index];
        if (usuario.user === username && usuario.senha === password) {
            let mathRandom = Math.random().toString(16).substr(2)
            let token = mathRandom + mathRandom
            localStorage.setItem('token', token)
            localStorage.setItem('userLogado', JSON.stringify(usuario))
            message = "Login efetuado com sucesso!"
            window.location.href = "./index.html"
        } else {
            message = "Credenciais inválidas!"
        }
    }
    console.log(message)
  }