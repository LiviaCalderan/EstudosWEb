let opcao = ""
const baralho = []


do{
    let tamanho = baralho.length
    if (tamanho > 0){
        opcao = prompt(
            "Quantidade de cartas no baralho: " + (tamanho) +
            "\n\nEscolha uma opção: " + 
            "\n\n1 - Adicionar uma carta" +
            "\n2 - Puxar uma carta" +
            "\n3 - Sair"
        )    
    } else {
        opcao = prompt(
            "Ainda não há cartas!" +
            "\n\nEscolha uma opção: " + 
            "\n\n1 - Adicionar uma carta" +
            "\n2 - Puxar uma carta" +
            "\n3 - Sair"
        )    
    }
    

    switch(opcao){

        case "1":
            cartaAdicionada = prompt("Insira o nome da carta a ser adicionada: ")
            baralho.unshift(cartaAdicionada)
            break

        case "2":
            let cartaPuxada = baralho.shift("")
            alert("Carta retirada: " + cartaPuxada)    
            break

        case "3":
            alert("Finalizando o programa...")
            break   
            
        default:
            alert("Insira uma opção válida!")
            break    

    }

} while (opcao !== "3")