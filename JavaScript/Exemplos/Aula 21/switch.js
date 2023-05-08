const resultado = prompt("Escolha uma alternativa: \na) \nb) \nc)")


switch (resultado){
    case "a":
        alert("O resultado é 'a'")
        break
    case "b":
        alert("O resultado é 'b'")
        break
    case "c":
        alert("O Resultado é 'c'")
        break
    default:
        alert("Finalizando")
}
//não precisa necessariamente ser uma string, pode ser um número, só lembrar do ParseFloat