let num =[5,6,2]//cria o vetor com três elementos com indice iniciando em 0 (0,1,2).
num[3] = 6//cria mais um elemento de indice 3 e valor 6.
num.push(7)//cria mais um elemento e coloca direto o valor na ultima posição.
num.sort()//Coloca os valores do vetor em ordem.
console.log(`Nosso vetor é o ${num}`)
console.log(num.length)//Mostra o tamanho do vetor. 
console.log(`O vetor tem ${num.length} posições.`)
console.log(num[0])//Mostra o valor dentro da primeira posição.
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)//cria uma variável(pos) e procura em qual posição tem o valor 6.
if (pos == -1){//Quando a procura do valor dentro do vetor é igual a -1 significa que o valor nao existe dentro do vetor.
    console.log(`O valor não foi encontrado.`)
}
else{//Mostra o resultado de (pos).
    console.log(`O valor está na posição ${pos}`)
}