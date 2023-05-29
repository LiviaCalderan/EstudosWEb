let pokemon = "Charmander" //Escopo mais externo

function evoluir(){
    pokemon = "Charmeleon" //Escopo mais interno nesse cenário
}

//Escopo é o contexto no qual a variável foi declarada

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal(){
    let animal = "gato"
}

criarAnimal()
//console.log(animal) //Retorna animal is not defined

//Variáveis criadas em um escopo interno não funcionam no externo


function avaliarNota(nota) {
    if (nota >= 60) {
        var aprovado = true //O var msm sendo mais interno consegue sair em if e else
        let situação = "Aprovado" //o let, sendo mais interno, não sai
    } else {
        var aprovado = false
        let situação = "Reprovado" // erro
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situação) //não consegue ler por está declarado com let
}   

//avaliarNota(83)
//avaliarNota(44)

function ola() {
    var texto = "Ola Mundo!"
}

//console.log(texto) //nao le, pois não tem um if ou else


console.log(nome)
//console.log(sobrenome)

var nome = "Lívia"
let calderan = "Calderan"

console.log(nome)
//console.log(sobrenome)