
let linha1= document.querySelectorAll(".botao")
console.log(linha1)
let i = 0
let lista = []
let palavraTeste = ["a", 'm', 'o', 'r', 'a']
respostas = []



function teclar(letra){
    if(i == 0 && letra.keyCode == 8){
        return
    }
    else if(letra.keyCode == 8){
        i--
        lista.pop()
        linha1[i].innerHTML  = ''
        console.log(lista)        
    }

    else if(i == 5){
        if(letra.keyCode == 8){
            i--
            lista.pop()
            linha1[i].innerHTML  = ''
        } else if(letra.keyCode=13){
            respostas.push(lista.slice(0,5).toString())
            if(lista.slice(0,5).toString()== palavraTeste.toString()){
            alert ("você é bom!!")
            }
            else{
                alert ("burrão!")
                i++
            }


            
        } 
    } 

    else{
        linha1[i].innerHTML = letra.key
        console.log(lista.push(letra.key))
        i++
        console.log(lista)
        }
    console.log(i)
    

}