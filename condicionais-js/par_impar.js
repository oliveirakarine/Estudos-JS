//Atividade 1 – Fazer um programa para ler um número do usuário e
//determinar se este número é par ou não par.

//var numeroUsuario = prompt ('Digite um número');
// console.log("Escreva um número: ");

function numeroUsuario(numero) {
  var numeroUsuario = numero;
  if (numero % 2 == 0) {
    console.log("O número do usuário é", numero, ", é par!");
  } else if ((numero) && (numero % 2 != 0)) {
    console.log("O número do usuário é", numero, ", é ímpar!");
  } else {
    console.log("O número do usuário é", numero, ", é nulo!");
  }

  if(numero){
      console.log('ok')
  }

}

numeroUsuario(4);
numeroUsuario(7);
numeroUsuario();
