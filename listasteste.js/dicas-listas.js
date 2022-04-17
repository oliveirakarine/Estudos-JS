// criar lista vazia 
var lista = []
// criar lista com dados
var lista2 = [11,22,33,44,55,66]
// adicionar item na lista 
lista.push(60)
// remover ultimo
lista.pop()
console.log(lista2[2]) // acessa um item pelo indice
// ver tamanho da lista
console.log(lista.length)

//percorrer lista
var t = lista2.length
for (let i = 0; i < t; i++) {
    console.log(lista2[i]);
}
// lista de valor logico
var lista3 = [true,false]
// lista de texto
var lista4 = ['joel','ka','kau','lilo','preta']
console.log(lista4[4])
var nome = 'joelcio andrade matias'
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
console.log(nome[0]);
//lista de lista
lista5 = [[33,22],[51,55],[55.44,4]]
// console.log(lista5[2])
var segundoItem = lista5[1]
console.log(segundoItem[1])
// percorrer lista com funcao
lista4.forEach((n) => {
    console.log(n)
})
//lista de itens diferentes
var itens = [20,'joel',1.55,false,null,[],0,undefined]

for (i in itens) {
    console.log(itens[i]);
    
}
