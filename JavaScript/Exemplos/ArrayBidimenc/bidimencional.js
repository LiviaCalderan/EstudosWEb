//Arrays dentro de arrays

const arr = [
    "1° Nível",
    ["2°Nível", 42, true],
    [
        ["3° Nível", "1° Item", "Hello Word!"],
        ["3° Nível", "2° Item", "Hello Word!"],
    ],
    []
]

//Cada par de colchetes referencia um nível mais interno do arrays

console.log(arr) //me da todo o array
console.log(arr[0]) // me retornaria a string 1° Nível
console.log(arr[1][0]) //vai me retornar o 2° Nível
console.log(arr[2][1][1]) // me retornaria 2° Item


//Estrutura de uma matriz

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  console.table(matriz) //exibe em forma de tabela

  matriz.push(["Nova linha"])
  matriz[0].push("Nova Coluna") // o número referencia em qual linha sera adicionado o elemento

  console.table(matriz)

//Pode usar vários níveis de laços FOR para iterar pela matriz

for (let i = 0; i < matriz.length; i++){ //array + externo / repetição que passa pelas linhas
    for (let j = 0; j < matriz[i].length; j++){ //repetição que passa por cada coluna
        const element = matriz[i][j]
        console.log("Posição: (" + i +", " + j + ") Valor: " + element)
    }
}

