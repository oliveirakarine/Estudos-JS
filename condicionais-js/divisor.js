//Escreva um algoritmo que leia um número e informe se ele
//ou não divisível por 5.
//|| ((numero % 3)==0))

function div(numero) {
    var div = ("%d", numero);

    if (numero % 5 == 0) {
    console.log("O número é divisivel por 5\n");
    } else {
    console.log("O número não é divisivel por 5\n");
    }
}
div(15);
div(13);
