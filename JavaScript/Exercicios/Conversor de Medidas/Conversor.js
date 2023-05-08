const valor = parseFloat(prompt ("Digite o valor em metros: "))
let resultado 
const unidMedida = parseFloat(prompt (
    "Qual será a unidade de medida: \n1.mm \n2.cm \n3.dm \n4.dam \n5.hm \n6.km \nObs: Digite apenas o número"))

switch (unidMedida){
    case 1:
        resultado = valor * 1000
        alert("O valor em 'mm' é: " + resultado + " mm")
        break

    case 2:
        resultado = valor * 100
        alert("O valor em 'cm' é: " + resultado + " cm")
        break

    case 3:
        resultado = valor * 10
        alert("O valor em 'dm' é: " + resultado + " dm") 
        break

    case 4:
        resultado = valor / 10
        alert("O valor em 'dam' é: " + resultado + " dam") 
        break
        
    case 5:
        resultado = valor / 100
        alert("O valor em 'hm' é: " + resultado + " hm") 
        break
        
    case 6:
        resultado = valor / 1000
        alert("O valor em 'km' é: " + resultado + " km")
        break
        
    default:
        alert("Opção Inválida")
        break    
    
            


}  
