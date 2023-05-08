let velocidade = 0
//mesmo com a condição já sendo falsa desde o inicio, ele executa a parte do 'do'

do{
    alert("A Velocidade do veículo é: " + velocidade + " km/h" )
    velocidade -= 20
} while ( velocidade > 0)

alert("Velocidade Final: " + velocidade + " km/h" )