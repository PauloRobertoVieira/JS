//criar de forma literal

function fun1(){ }

//armazenar em uma variável
const fun2 = function (){}

// armazenar em um array
const array = [function(a, b) { return a+b }, fun1, fun2]


const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

// passar função como paramentro
function run(fun){
    fun()
}

run(function() { console.log('Executando... Passado como parametro')})


// uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(1, 3)(5)
const aMaisB = soma(2, 3)
aMaisB(1)