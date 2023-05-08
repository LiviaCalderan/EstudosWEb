/*
Escreva um programa em javascript que permita inserir o nome
e a velocidade de dois veículos e exiba na tela uma mensagem dizendo
qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

//Variáveis do primeiro veículo
const vehicle1 = prompt("Insira o nome do primeiro veículo: ")
const speed1 = parseFloat(prompt("Insira a velocidade do primeiro veículo: "))

//variáveis do segundo veículo
const vehicle2 = prompt("Insira o nome do segundo veículo: ")
const speed2 = parseFloat(prompt("Insira a velocidade do segundo veículo: "))

//Condicionais para a exibição dos resultados do teste
if (speed1 > speed2){
    alert("O " + vehicle1 + " é mais rápido")
} else if (speed1 < speed2){
    alert("O " + vehicle2 + " é o mais rápido")
} else if ( speed1 === speed2){
    alert("Ambos os veículos tem a mesma velocidade")
}
