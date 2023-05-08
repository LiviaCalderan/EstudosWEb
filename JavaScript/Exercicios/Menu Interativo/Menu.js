let opcao = ""

do{
    opcao = prompt(
        "Escolha uma das seguintes opções: " +
        "\n1. Opção 1" +
        "\n2. Opção 2" +
        "\n3. Opção 3" +
        "\n4. Opção 4" +
        "\n5. Encerrar"
    ) 
    // o SWITCH permite que um bloco de código seja executado de acordo com o valor de uma expressão ou variável
    switch (opcao) {
        case "1":
        alert("Você escolheu a opção um")
        break

        case "2":
        alert("Você escolheu a opção dois")
        break

        case "3":
        alert("Você escolheu a opção três")
        break

        case "4":
        alert("Você escolheu a opção quatro")
        break

        case "5":
        alert("Encerrando o programa...")
        break

        default:
            alert("Escolha uma opção valida entre as cinco")
    }
} while (opcao !== "5") // Irá ser executado enquanto for diferente de 5, que encerra o programa