const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, opercao = soma) {
    console.log(opercao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(4, 5, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Olá')
    }
}

pessoa.falar()