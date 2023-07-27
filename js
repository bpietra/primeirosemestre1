function verificarFase() {
  const idade = parseInt(document.getElementById("idade").value);

  let fase;
  if (idade <= 11) {
    fase = "Criança";
  } else if (idade >= 12 && idade <= 20) {
    fase = "Adolescente";
  } else if (idade >= 21 && idade <= 65) {
    fase = "Adulto";
  } else {
    fase = "Idoso";
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `A fase da vida de ${document.getElementById("nome").value} é ${fase}.`;
}
