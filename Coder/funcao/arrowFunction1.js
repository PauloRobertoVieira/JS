let dobro = function (a){
    return 2 * a + 1
}

dobro = (a) => {
    return 2 * a + 2
}

dobro = a => 2 * a + 3 //return implicito
console.log(dobro(3))


let ola = function(){
    return 'Olá'
}

ola = () => 'tchau'
console.log(ola())