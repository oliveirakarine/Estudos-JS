//float massa, altura, imc;
function peso(pes, altura) {
  imc = pes / (altura ^ 2);
  resposta = "";

  teste1 = imc < 20
  if (teste1) {
    reposta = "IMC: " + imc + " Abaixo do peso";
  } else if (imc >= 20 && imc < 25) {
    resposta = "IMC: " + imc + " Peso normal";
  } else if (imc >= 25 && imc < 30) {
    resposta = "IMC: " + imc + " Sobrepeso";
  } else if (imc >= 30 && imc < 40) {
    resposta = "IMC: " + imc + " Obesidade grau 1";
  } else if (imc > 40) {
    resposta = "IMC: " + imc + " Obesidade grau 2";
  } else {
    (resposta = "IMC: " + imc + "Obesidade grau 3"), imc;
  }

  return resposta;
}

resultado = peso(60, 1.65);
console.log(resultado)
