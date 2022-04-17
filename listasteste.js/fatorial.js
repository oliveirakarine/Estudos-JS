/* Atividade 5 – Construa um programa que calcule N! (fatorial de N), sendo
que o valor de N (inteiro) é fornecido pelo usuário. Sabe-se que:
N! = 1 x 2 x 3 x 4 x .... x N
OBS: 0! = 1 (fatorial do número zero é igual a 1 por definição).
Além disso, não deve ser permitido que seja calculado o fatorial de número
negativo, pois isso não existe*/


function fatorial(num){
    var res = num
    var f = `${num}! = ` 
    if(num < 0){
        console.log('número negativo')
        return
    }else if (num == 0){
        res = 1
    }else {
        for (i = num; i > 1; i--) {
            res = res * (i - 1)
            f += `${i - 1} * `
        }
    }
    
    console.log(f)
    console.log(res)
    
}
fatorial(0);
// for (let i = 1; i < 20; i++) {
//     fatorial(i)
// }