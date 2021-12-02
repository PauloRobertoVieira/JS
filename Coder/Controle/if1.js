function soBoaNoticia(nota) {
  if (nota >= 7) {
      console.log('Aprovado com '+nota)
  }
}

soBoaNoticia(8.4)
soBoaNoticia(6.8)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade...'+valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
//seForVerdadeEuFalo(Nan)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})