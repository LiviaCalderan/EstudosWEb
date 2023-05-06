//declaração de variáveis 
const firstValue = prompt ("Informe o primeiro valor: ")
const secondValue = prompt ("Informe o segundo valor: ")

//Conversão do valor para float, ou seja, do que é escrito para um número
const x = parseFloat(firstValue)
const y = parseFloat(secondValue)

//Calculo das operações
const addition = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

//exibição dos resultados na tela
alert(
    "Resultados: \n" +
    "\nSoma: " + addition +
    "\nSubtração: " + subtraction +
    "\nMultiplicação: "+ multiplication +
    "\nDivisão: " + division
)

