// window.alert("Minha primeira mensagem!")
// window.confirm("Está gostando de JavaScript?")
// var nome = window.prompt("Qual o seu nome?")
// window.alert("É um grande prazer conhece-lo, "+ nome + "!")//Concatenação.

// var n1 = Number.parseInt(window.prompt("Digite um número :"))//string
// var n2 = Number.parseInt(window.prompt("Digite outro número :"))//string
// var s = n1 + n2
// window.alert("A soma dos valores é :" + s )

var nome = window.prompt("Qual o seu nome?")
console.log (nome)
document.write(`Olá ${nome} seu nome tem ${nome.length} letras <br>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)