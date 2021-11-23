const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua bonita",
        numero: 15
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)