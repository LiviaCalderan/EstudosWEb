//declaração de variáveis e mensagem que será mostrada

const primeiroNome = prompt("Informe o primeiro nome do recruta: ")
const sobrenome = prompt("Informe o sobrenome do recruta: ")
const campoDeEstudo = prompt("Qual o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual o ano de nascimento do recruta?")

//Mensagem de cadastro, contendo os valores informados
alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo + 
    "\nidade: " + (2023 - anoDeNascimento)
)