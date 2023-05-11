const arr = ["Harry", "Rony", "Hermione", "Draco", "Nevile", "Luna", "Dumbledore", "Minerva"]
console.log(arr)

//adicionar elementos
//push (adiconar elemento no final do array; variável tamanho pode ser aplicada para mostrar o novo tamanho do array)
let tamanho = arr.push("Hagrid")
console.log(arr)
console.log(tamanho)

//unshift (adicionar elementos ao começo do array); pode ter a variável tamanho tbm nos demais
arr.unshift("Voldemort")
console.log(arr)


//remover elementos
//pop (remove um elemento do final do array e devolve o elemento quando atribuido a variável)
let elementoRemovidoFinal = arr.pop()
console.log(arr)
console.log(elementoRemovidoFinal)

//shift (remove um elemento do começo do array)
let elementoRemovidoComeço = arr.shift()
console.log(arr)
console.log(elementoRemovidoComeço)


//Pesquisar por um elemento
//includes (verifica se um elemento está presente no array)
const inclui = arr.includes ("Draco")
console.log(inclui) //vai me dar um resultado true or false; no caso true

// indexOf: Encontra o índice (posição) que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("luna")
console.log(indice) //me informará que está na posição 5; lembrado que começa no 0


//cortando e concatenando
//slice (Copia uma parte do array e devolve a parte copiada sem alterar o array original)
const professores = arr.slice(6, 8) //indica o começo do corte e o final, sendo que no caso, o termo finalé excluso
console.log(professores) //irá me devolver 'Dumbledore' e 'Minerva'

const outros = arr.slice(-4) //Também pode com números negativos para refernecias o final da array
console.log(arr)
console.log(outros)//irá me devolver apartir do 'Neville', pois contando ao contrário ele é o 4
console.log(professores) //irá me devolver 'Dumbledore' e 'Minerva'

//concat (junta dois ou mais arrays e/ou itens e devolve o resultado sem alterar nenhum dos arrays)
const amigos = professores.concat(outros, "Hagrid")
console.log(amigos)
console.log(professores)
console.log(outros)


//substituindo elementos
//splice (permite remover elementos em qualquer posição do array e substituir por novos)
const a = amigos.splice(2, 1, "Harry, o menino que sobreviveu")
//encontra o indice, quantos exclui apartir dele, e substitui pelo elemento colocado
console.log(a) //devolve uma lista de elementos devolvidos, no caso,['neville']
console.log(amigos)


//Iterando sobre os elementos
//Usando o for para percorrer elementos do array
for (let indice = 0; indice < amigos.length; indice++){
    const elemento = amigos[indice]//a cada repetição o indice será uma posição do array
    console.log (elemento + " se encontra na posição: " + indice)
}

