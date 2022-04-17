/*Desenvolver um algoritmo que efetue a soma de todos os
números que são múltiplos de três e que se encontram no conjunto dos
números de 1 até 500*/

function multplos() {
    var soma = 0
    for (i = 1; i <= 500; i++) {
        if (i % 3 == 0) {
            soma = (soma + i)
        }
        console.log(soma, i );
    }
  //MOSTRAR RESULTADOS
    console.log("\n\n SOMA: %d\n\n", soma);
}

multplos();
