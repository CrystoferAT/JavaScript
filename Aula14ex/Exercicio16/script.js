// alert("Olá")
function Contar(){
    var ini = window.document.getElementById("txti")
    var fim = window.document.getElementById("txtf")
    var passo = window.document.getElementById("txtp")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        // window.alert("[ERRO} Faltam dados!")
        res.innerHTML =`Impossível Contar!`
    }
    else{
        res.innerHTML = "Contando ...<br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert("Passo inválido ! Sera considerado PASSO 1")
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p){
            res.innerHTML +=`${c} \u{1F449}`
            }
        } else{
            //Contagem regressiva
            for (let c = i; c >= f; c -= p){
            res.innerHTML +=`${c} \u{1F449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}`
    }    
}