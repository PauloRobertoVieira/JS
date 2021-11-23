console.log(typeof Object)
console.log(typeof new Object)//instanciando uma função
console.log("***************")
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log("***************")
class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto())

// par chave/valor
const saudacao = 'Olá' // contexto lexico

function exec(){
    const saudacao = 'E ai blz?' // outro contexto lexico
    return saudacao
}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Eva',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua felicidade",
        numero: 13
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)