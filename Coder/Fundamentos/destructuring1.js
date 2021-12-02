function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max -min ) + min
    return Math.floor(valor)
}

const obj = { max: 59, min: 00}
console.log("entre 0 e 59 = ", rand(obj))
console.log("menor que 1000 = ", rand({max: 999}))
console.log("randomico = " ,rand({}))