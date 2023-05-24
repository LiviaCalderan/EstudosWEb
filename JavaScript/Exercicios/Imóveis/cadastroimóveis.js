let opcao = ""
let imoveisArray = []

do{
    if (imoveisArray.length > 0) {
        opcao = prompt(
            "Quantidade de imóveis cadastrados: " + imoveisArray.length +
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

    switch(opcao){

        case "1":
            const imoveis = {}
            imoveis.proprietario = prompt("Nome do proprietario:")
            imoveis.quartos = prompt("Quantidade de quartos:")
            imoveis.banheiros = prompt("Quantidade de banheiros:")
            imoveis.garagem = prompt("Possui garagem? sim/nao")
            imoveisArray.push(imoveis)

            break

        case "2":
            if(imoveisArray.length == 0){
                alert("Não há imoveis cadastrados!")
            } else {
                imoveisArray.forEach((imovel, index) => {
                    console.log(`Imóvel ${index + 1}`);
                    console.log(`Proprietário: ${imovel.proprietario}`);
                    console.log(`Quartos: ${imovel.quartos}`);
                    console.log(`Banheiros: ${imovel.banheiros}`);
                    console.log(`Garagem: ${imovel.garagem ? "Sim" : "Não"}`);
                    console.log("------------------------");
                  });
                
            }
            break

        case "3":
            alert("Finalizando...")
            break

        default:
            alert("Insira uma opção válida!")

    }

    } while (opcao != "3")