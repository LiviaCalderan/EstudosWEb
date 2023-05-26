//Retorno é uma saída da função

//O retorno é usado para armazenarmos a saída de uma função em uma varíalvel

//Uma função sem saída explícita retornará undefined
function calcularMedia (a, b){
    const media = (a + b) / 2
    return media //valor retornado e armazenado na variavel resultado
    //return - para trabalhar com o valor fora da função
}
const resultado = calcularMedia(5, 9)
console.log(resultado)

function criarProduto (nome, preco) {
    const produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto
}

//console.log(criarProduto("Notebook Intel Core I7 8gb", 3500))

//o retorno de uma função não precisa necessariamente ser uma variável

function areaRetangular (base, altura){
    return base * altura
    
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

//console.log(areaRetangular(5, 2))

//console.log(areaQuadrada(9))

//uma função só pode retornar uma vez

function ola(){
    let texto = "..."
    return texto
    texto = "Olá Mundo!"
    console.log(texto)
    //essas ultimas 2 linhas não são executadas
}

console.log(ola())

function maioridade(idade){
    if(idade >= 18){
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(15))