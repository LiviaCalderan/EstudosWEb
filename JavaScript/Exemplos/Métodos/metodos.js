//Os métodos são basicamente funções atreladas a objetos

let pessoa = {
    nome: "Lívia",
    idade: 20,
    dizerOla () {
        console.log("Olá Mundo, meu nome é " + this.nome)
    }
}

console.log (pessoa)

pessoa.dizerOla()

//o THIS aponta para dentro do próprio objeto

