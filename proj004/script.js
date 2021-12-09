function clicar(){
    var fnum = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    var num = Number(fnum.value) 
    if(fnum.value.length == 0){
        window.alert('[ERRO] Coloque um número!')
    }else{
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
        var item = document.createElement('option') //criando elemento option pelo JS
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item) //Adicionar pelo JS
        }
    }
}