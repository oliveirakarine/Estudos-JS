/*Atividade 1 – Fazer um programa que escreva primeiro todos os números
pares e depois todos os ímpares de 0 a 100.*/

function Pares() {
    for (var i = 0; i < 101; i++) {

        console.log('valor de i: ',i)

        if (i % 2 == 0 && i !== 0) {
            console.log("par " + i);
        } else if (i % 2 !== 0){
            console.log("impar", +i);    
        } else {
            console.log('nem par nem impar')
        }
    }
}
Pares();

function Impar() {
    for (var i = 1; i <= 100; i++){
        if (i % 2 !== 0) {
        console.log("impar", +i);
        }
    }
}
// Impar();
