/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade.
   Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se
   o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista,
   quantas e quais cidades ele visitou.
*/    

//Declarando as variáveis de contagem e nome das cidades
const nomeTurista = prompt("Qual o seu nome?")
let cidadesVisitadas = ""
let contagem = 0

let continuar = prompt("Você já viajou para alguma cidade? (sim/nao) ")


while (continuar === "sim") {
   let cidade = prompt("Qual o nome da cidade visitada?")
   //cidades = cidades + ... (+=)
   cidadesVisitadas += "-" + cidade + "\n"
   contagem++ // (++ é o valor da contagem + 1)
   continuar = prompt("Você visitou alguma outra cidade (sim/nao)")
}

//Mensagem final
alert(
   "Turista: "+ nomeTurista +
   "\nQuantidade de cidades visitadas: " + contagem +
   "\nCidades visitadas:\n" + cidadesVisitadas
)