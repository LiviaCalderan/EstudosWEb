let velocidade = 80

//Quando a velocidade ficar menor que zero, a condição se torna falsa, e ele para
while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("Dominuindo 20 km/h")

    if(velocidade === 40){
        break
    }
}

alert("O carro parou")