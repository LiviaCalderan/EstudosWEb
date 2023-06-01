//Função que chama ela mesma, se executa de novo

function dividir(num){
    console.log(num)
    if (num % 2 === 0 ) {
        dividir(num/2)
    } else {
        return num
    }
}

//dividir(320)

//É importante que a função recursiva tenha um modo de para de chamar funções
function dobrar(num){
    console.log(num)
    dobrar(num*2)
}
//dobrar(1) // Ultrapassa o limite da pilha de chamadas

//fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num){
    console.log("num = " + num)
    if (num === 0){ //caso base
        return 1
    } else if (num === 1) { //caso base
        return 1
    } else {
        console.log(num + " * !" + (num-1))
        return num * fatorial(num - 1)
    }
}

fatorial(8)