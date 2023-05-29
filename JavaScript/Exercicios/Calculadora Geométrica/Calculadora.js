let opcoes = ""

function triângulo (b, a){
    return b * a
}

function retângulo (b, a){
    return b * a
}

function quadrado (lado){
    return lado * lado
}

function trapezio (baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2
}

function circulo(raio){
    return 3.14 * (raio * raio)
}

do { 
    opcoes = prompt(
        "Escolha a opção de cálculo desejada: " +
        "\n\n1 - Área do triângulo: base * altura / 2" +
        "\n2 - Área do retângulo: base * altura" + 
        "\n3 - Área do quadrado: lado²" + 
        "\n4 - Área do trapézio: (base maior + base menor) * altura / 2" +
        "\n5 - Área do círculo: pi * raio² (considere pi = 3.14)" +
        "\n6 - Sair"
    )

    switch(opcoes){

        case "1" :
            b = parseFloat(prompt ("Qual o tamanho da base?")) 
            a = parseFloat(prompt ("Qual o altura?")) 

            var resultado = triângulo(b,a)
            alert("A área do triângulo é: " + resultado)
            break
            
        case "2" :
            b = parseFloat(prompt ("Qual o tamanho da base?")) 
            a = parseFloat(prompt ("Qual o altura?")) 

            var resultado = retângulo(b,a)
            alert("A área do retângulo é: " + resultado)
            break

        case "3" :
            lado = parseFloat(prompt ("Qual a medida do lado?")) 

            var resultado = quadrado(lado)
            alert("A área do quadrado é: " + resultado)
            break

        case "4" :
            baseMaior = parseFloat(prompt ("Qual a medida da base maior?")) 
            baseMenor = parseFloat(prompt ("Qual a medida da base menor?"))
            altura = parseFloat(prompt ("Qual a altura?")) 

            var resultado = trapezio(baseMaior, baseMenor, altura)
            alert("A área do trapézio é: " + resultado)
            break

        case "5" :
            raio = parseFloat(prompt ("Qual o raio do círculo?")) 

            var resultado = circulo(raio)
            alert("A área do círculo é: " + resultado)
            break

        case "6" :
            alert("Finalizando ...")
            break
            
        default:
            alert("Escolha uma opção válida!")
            break    
    }

} while (opcoes != "6")