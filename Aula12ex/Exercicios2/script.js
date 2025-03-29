// alert("funcionou")
function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert("Verifique os dados e tente novamente!")
    }
    else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value) 
        // res.innerHTML = `Idade Calculada: ${idade}`//teste
        var genero = ""
        var img = window.document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute("src", "imagens/hbb.png")
            }
            else if ( idade < 21){
                //Jovem
                img.setAttribute("src", "imagens/hado.png")
            }
            else if ( idade < 50){
                //Adulto
                img.setAttribute("src", "imagens/hjov.png")
            }
            else {
                //Idoso
                img.setAttribute("src", "imagens/hido.png")
            }
        }
        else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute("src", "imagens/mbb.png")
            }
            else if ( idade < 21){
                //Jovem
                img.setAttribute("src", "imagens/mado.png")
            }
            else if ( idade < 50){
                //Adulta
                img.setAttribute("src", "imagens/mjov.png")
            }
            else {
                //Idosa
                img.setAttribute("src", "imagens/mido.png")
            }
        }
        res.computedStyleMap.textAlign = "Center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

