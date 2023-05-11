const listaDeCompras = ["Açúcar", false]
console.log (listaDeCompras)

listaDeCompras[0] = "Tomate"
listaDeCompras[2] = "Arroz"
listaDeCompras[1] = "Feijão"
listaDeCompras[3] = 7
listaDeCompras[7] = "Batata" 
//na lista, aparecerá um empty 3x antes de batata, pois os valores anteriores não foram atribuidos

console.log (listaDeCompras)

console.log(listaDeCompras[10]) //me devolve undefined