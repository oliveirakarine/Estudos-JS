//Escreva um algoritmo para determinar se um dado número
//N (recebido através do teclado) é POSITIVO, NEGATIVO ou NULO.

    function num(numero) {
        var num = numero
        if (numero > 0){
        console.log(numero + " é Positivo");
        } else
        if (numero < 0){
        console.log(numero + " é Negativo");
        }else{
        console.log("Nem positivo nem negativo, é nulo");
        }        

    }

    num(0);
    num(-2);
    num(5);