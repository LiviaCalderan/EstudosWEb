/*
    Escreva um programa que permita inserir o nome e o poder de ataque de um personagem,
    depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem
    e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

    - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo,
    o dano causado será igual a diferença entre o ataque e a defesa.
    - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo,
    o dano causado será igual a metade da diferença entre o ataque e a defesa.
    - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

    Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida
    do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
    */

const attackingCharacter = prompt("Qual o nome do personagem atacante?")
const attackPower = parseFloat (prompt("Qual o poder de ataque do personagem?"))

const defenseCharacter = prompt("Qual o nome do adversário defensor?")
let life = parseFloat (prompt("Informe a quantidade de pontos de vida: "))
const defencePower = parseFloat (prompt("Qual o poder de defesa do personagem?"))
const shield = prompt("O personagem possui escudo? (sim/nao)")

let danoCausado = 0

if ( attackPower > defencePower && shield === "nao" ){
    danoCausado = attackPower - defencePower
} else if (attackPower > defencePower && shield === "sim"){
    danoCausado = (attackPower - defencePower) / 2
}

alert (attackingCharacter + " causou " + danoCausado + " pontos de dano em " + defenseCharacter)
alert(
    attackingCharacter + "\nPoder de ataque: " + attackPower + "\n\n" +
    defenseCharacter + "\nPontos de Vida: " + life +
    "\nPoder de Defesa: " + defencePower +
    "\nPossui Escudo: " + shield
)



    