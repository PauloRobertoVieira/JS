const notas = [6.7, 7.8, 9.8, 8.1]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Eva',
    sobrenome: 'Estrela Vieira',
    idade: 5,
    peso: 25.200
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}