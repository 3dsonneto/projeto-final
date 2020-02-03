function enviar() {
  var emailValue = document.getElementById('emailTXT').value;
  var timestamp = new Date().getTime();

  // A variavel database vai receber as funcoes de acesso ao banco de dados
  var database = firebase.database();
  database.ref(timestamp).set({
    email: emailValue,
  });
}