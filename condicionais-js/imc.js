//float massa, altura, imc;
function peso(pes, altura) {
  imc = pes / (altura ^ 2);

  if (imc < 20) {
    console.log("IMC: %f\tAbaixo do peso\n", imc);
  } else if (imc >= 20 && imc < 25) {
    console.log("IMC: %f\tPeso normal\n", imc);
  } else if (imc >= 25 && imc < 30) {
    console.log("IMC: %f\tSobrepeso\n", imc);
  } else if (imc >= 30 && imc < 40) {
    console.log("IMC: %f\tObesidade grau 1\n", imc);
  } else if (imc > 40) {
    console.log("IMC: %f\tObesidade grau 2\n", imc);
  } else {
    console.log("IMC: %f\tObesidade grau 3\n", imc);
  }
}

peso(60, 1.65);
