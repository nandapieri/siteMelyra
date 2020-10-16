document.getElementById("btn_enviar").addEventListener("click", validaForm)

function validaForm(){

  var nome = document.getElementById("nome").value
  var email = document.getElementById("email").value
  var msg = document.getElementById("msg").value

  if (nome != "" && email != "" && msg != "") {
    alert("Prontinho! Você receberá as novidades por email.")
  } else {
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}
