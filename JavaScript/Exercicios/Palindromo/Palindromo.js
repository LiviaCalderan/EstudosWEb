let palavra = prompt("Escreva uma palavra:")
let palavraInvertida = "" //para armazenar a palavra ao contrario e exibir dps

//A variavel "i" é criada e inicializada com o valor do comprimento da palavra menos 1, para que comece pela ultima posição
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i] 
    // ex: se o valor de i for 0, palavra[i] retornará o primeiro caracter da string 'palavra'
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo")
} else {
    alert(
        palavra + " não é um palíndromo\n\n" +
        palavra + "!== " + palavraInvertida
        )

}