let valores =[8,1,7,4,2,9]

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos=0; pos < valores.length; pos++){//inicia o contador(pos) em 0; e pucha o tamnho do vetor(valores.length) para comparar com o contador(pos); incrementa o contador(pos)sempre em mais 1(pos++).
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}


