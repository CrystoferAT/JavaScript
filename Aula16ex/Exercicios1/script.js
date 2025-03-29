// alert("Olá")
// if (num.value.length == 0 ){
    //     window.alert("Por favor, Digite um número!")
    // }else {
    //     let n = Number(num.value)
        
    //     if(n >= 1 && n <= 100){
    //         window.alert(`Número ${n} foi adicionado.`)
    //         for ( let vet = 0;  vet < n.length; vet++ ){
    //             console.log(`${n}`)
    //         }
    //     }else if (n == n){
    //         window.alert("Numero Existente !")
    //     }else{
    //         window.alert("Por favor, Digite um número válido!")
    //     }
    // } 
let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.querySelector("div#res")
valores = []
function isnum(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
    return false
    }
}
function Add(){
    if( isnum(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert("Valor inválido ou já encontrado na lista !")
    }
    num.value = ""
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é: ${media}</p>`
    }
}