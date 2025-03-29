// window.alert("Minha primeira mensagem!")
// window.confirm("Está gostando de JavaScript?")
// var nome = window.prompt("Qual o seu nome?")
// window.alert("É um grande prazer conhece-lo, "+ nome + "!")//Concatenação.

// var n1 = Number.parseInt(window.prompt("Digite um número :"))//string
// var n2 = Number.parseInt(window.prompt("Digite outro número :"))//string
// var s = n1 + n2
// window.alert("A soma dos valores é :" + s )

// var nome = window.prompt("Qual o seu nome?")
// console.log (nome)
// document.write(`Olá ${nome} seu nome tem ${nome.length} letras <br>`)
// document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)
// document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)

// window.document.write(window.document.charset)
// var corpo = window.document.body
// var p1 = window.document.getElementsByTagName("p")[1]
// window.document.write(p1.innerText)
// corpo.style.background = "black"
// p1.style.color = 'blue'
// document.write(p1.innerHTML)
// var d = window.document.getElementById('msg')
// d.style.background = "green"
// d.innerText = "Estou Aguardando!"
// var d = window.document.getElementsByName("msg")[0]
// d.innerText = "Olá Mundo "
// var d = window.document.querySelector("div#msg")
// d.style.color = "blue"
function clicar(){
    var a = window.document.getElementById('area')
    a.innerText = 'Clicou!'
}
