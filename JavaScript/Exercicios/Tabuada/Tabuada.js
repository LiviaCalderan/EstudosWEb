let numero = parseFloat(prompt("Insira o número a ser usado nos calculos: "))
let resultados = "" //string para poder mostrar os resultados posteriormente

for (
    let multiplicador =  1;
    multiplicador <= 20;
    multiplicador ++
){
    let resultado = numero * multiplicador
    resultados += numero + "x" + multiplicador + "=" + resultado + "\n"
    
}
alert(resultados)
    


