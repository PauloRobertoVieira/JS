//segundo console dá erro pois "i" foi declarado com let no escopo de bloco
for (let i = 1; i < 10; i++) {
    console.log(i)    
}

console.log('i= ',i)