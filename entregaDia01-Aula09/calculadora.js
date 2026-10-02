let idade = (21)

if(idade <= 17){
console.log("É menor de idade")
}else{
console.log("É maior de idade")
}

let numero = (1)
for(let i = 0; i < 10; i++){
resultado = numero++
console.log(resultado)
}





for(let i = 0; i < 20; i++){
    if(i%2 == 0 ){ 
        console.log(i)
    }
}

function calcularMedia(a, b, c){
const media = (a + b + c) / 3
return media;
}
const resultado2 = calcularMedia(5, 6, 7)
console.log(resultado2)

function classificarNota(media){

const classificarNota = (media)
 if(classificarNota >= 6){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}
classificarNota(5)