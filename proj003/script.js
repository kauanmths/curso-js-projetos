function clicar(){
    var finic = window.document.querySelector('input#txtinic')
    var ffim = window.document.querySelector('input#txtfim')
    var fpas = window.document.querySelector('input#txtpas')
    var res = window.document.querySelector('div.res')

    if(finic.value.length == 0){ //value.length não deixa ficar vazio
        res.innerHTML = 'Impossível contar'
    }else if(fpas.value == 0) {
        window.alert('Passo inválido! Considerando passo 1')
        fpas.value++
    }else {
        res.innerHTML = 'Contando: <br/>' 
        var inic = Number(finic.value)
        var fim = Number(ffim.value)
        var pas = Number(fpas.value)
        
        if(inic < fim){
            //contagem crescente
            for(var c = inic; c <= fim; c += pas){
            res.innerHTML += `\u{1F449} ${c} `
        }
        }else {
            //contagem decrescente
            for(var c = inic; c >= fim; c -= pas){
            res.innerHTML += `\u{1F449} ${c}`
        }
    }
    res.innerHTML += `\u{1F92D}`
}
}
