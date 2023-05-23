function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)

function dizerOla(name = "mundo"){
    alert("Olá, " + name + "!")
}

//dizerOla("Lívia")
//dizerOla()

function soma(a, b, c, d){
    alert("Resultado da soma = " + ( a + b + c + d))
}

//soma(7 , 1, 3, 5)

//A ordem dos parametros é importante

function criarUsuario(nome, email, senha, tipo = "adm"){
    const usuario = {
        nome, //mesmo que nome : nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "adm", email, senha){
    const usuario = {
        nome, //mesmo que nome : nome
        email,
        senha,
        tipo
        //nesse caso iria dar erro, pois o tipo com parametro já declarado deve ser colocado ao final
    }
}

criarUsuario("Lívia", "liv_calderan@email.com", "12345")

function muitosParametros (nome, telefone, endereço, email, senha, aniversario){

}

//muitosParametros("nome", "telefone", "endereço", ...)

function objetoComoParametro(usuario){
    usuario.nome
    usuario.email
    // ...
}

const dadosDoUsuario = {
    nome : "",
    email: "",
    telefone : "",

}   

objetoComoParametro(dadosDoUsuario)
