let opcao = ""
const imoveisCadastrados = []
let proprietario = ""
let quartos = ""
let banheiros = ""
let garagem = ""

do{
    if (imoveisCadastrados.length > 0) {
        opcao = prompt(
            "Quantidade de imóveis cadastrados: " + imoveisCadastrados.length +
            "\n\n Insira a opção que desejar:" +
            "\n\n1 - Salvar um imóvel" +
            "\n2 - Ver imóveis salvos" +
            "\n3 - Sair"
        )
    } else {
        opcao = prompt(
            "Ainda não há imóveis cadastrados" + 
            "\n\n Insira a opção que desejar:" +
            "\n\n1 - Salvar um imóvel" +
            "\n2 - Ver imóveis salvos" +
            "\n3 - Sair"
        )    
    }

    if (opcao == "1"){
        imovelSalvo = prompt("Insira um nome para o imóvel:")
        imoveisCadastrados.unshift (imovelSalvo)

    } else if (opcao == "2"){


    }else if (opcao == "3") {
        alert("Finalizando...")

    }else {
        alert("Insira uma opção válida!")
    }

        

    } while (opcao !=="3")