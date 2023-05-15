let opcao = "" 
let fila = []


do{
    if (fila.length == 0){
        opcao = prompt(
            "Lista de espera: Ainda não há pacientes" +     
            "\n\nEscolha uma opção: " +
            "\n\n1 - Novo Paciente" +
            "\n2 - Consultar Paciente" +
            "\n3 - Sair"
        )    
    }else{ 
        let pacientes = ""
        for(let i = 0; i < fila.length; i++)
            pacientes += (i + 1) + "º - " + fila[i] + "\n"
            opcao = prompt(
                "Lista de espera:\n" + pacientes +
                "\n\nEscolha uma opção: " +
                "\n\n1 - Novo Paciente" +
                "\n2 - Consultar Paciente" +
                "\n3 - Sair"
            )    
    }     
    
    

    switch(opcao){

        case "1":
            fila.push(prompt("Insira o nome do paciente: "))
            break

        case "2":
            let pacienteConsultado = fila.shift()    
            if (!pacienteConsultado) {
                alert("Não há pacientes na fila!")
              } else {
                alert(pacienteConsultado + " está sendo consultado.")
              }
            break

        case "3":
            alert("Finalizando programa...")  
            break  

        default:
            alert("Escolha uma opção válida!")
    }
} while (opcao !== "3")