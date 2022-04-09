/*Construir um algoritmo que leia um número e imprima se
ele é igual a 5, a 200, a 400, se está no intervalo entre 500 e 1000,
inclusive, ou se ela está fora dos escopos anteriores.*/

function num(numero) {
    var num = numero;

    if (numero === 5) {
    console.log(" Esse número é igual a 5");
    } else if (numero === 200) {
    console.log(" Esse número e igual a 200");
    } else if (numero === 400) {
    console.log(" Esse número e igual a 400");
    }
    else if (numero >= 500 && numero <= 1000) {
    console.log(" Esse número esta no intervalo 500-1000!");
    } else {
    console.log(" Não é igual a nenhuma alternativa!");
    }
}

num(499);
