const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if(x == 5){
        break
    }
    console.log(`indice ${x} = ${nums[x]}`)
}

console.log('-----**-----')

for(let y in nums){
    if(y == 5 || y == 6){
        continue
    }
    console.log(`indice ${y} = ${nums[y]}`)
}

externo:
for (a in nums){
    for (b in nums){
        if( a == 2 && b == 3) break externo
        console.log(`indice ${a},${b}`)
    }
}