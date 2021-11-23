Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if(nota.entre(9, 10)){  
        console.log('nota = ',nota,'Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('nota =',nota, 'Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('nota =',nota, 'Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('nota =',nota,'Reprovado')
    } else {
        console.log('Nota Inválida')
    }
    console.log('---*---')
}

imprimirResultado(11)
imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(5.4)
imprimirResultado(2.5)