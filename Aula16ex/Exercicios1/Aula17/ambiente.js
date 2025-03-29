let amigo = {nome:"José", 
    sexo: "M", 
    peso: 100, 
    engordar(p=0){
        console.log("Engordou")
    this.peso += p
    }}//Cria um objeto (amigos) com seus atributos(Nome,sexo,peso) e uma funçao(engordar)
    amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg. `)