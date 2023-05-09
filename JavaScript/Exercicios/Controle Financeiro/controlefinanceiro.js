let saldo = parseFloat ( prompt("Qual a quantia de dinheiro inicial?"))
let opcao = ""

do{
    opcao = prompt(
        "Quantidade de dinheiro disponível: R$ " + saldo +
        "\n\nSelecione a ação que deseja realizar:" +
        "\n1.Adicionar Dinheiro" +
        "\n2.Retirar Dinheiro" +
        "\n3.Sair"
        )

    switch (opcao){

        case "1":
            saldo += parseFloat( prompt("Insira a quantia a ser adicionada: ")) 
            break

        case "2":
            saldo -= prompt("Insira a quantia a ser retirada")
            break 

        case "3":
            alert("Finalizando o programa...") 
            break
            
        default:
            alert("Escolha uma opção válida")    
    }

}while (opcao !== "3")