var txtnum = window.document.getElementById('fnum')
var lisn = window.document.querySelector('select#lisnum')
var res = window.document.querySelector('div.res')
var valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    var num = Number(txtnum.value)
    if(isnumero(num) && !inlista(num, valores)){ 
        valores.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lisn.appendChild(item)
        res.innerHTML = ''
        txtnum.value = ''
        txtnum.focus()
    }else{
        window.alert('Valor incorreto ou valor já adicionado.')
    }
}

function finalizar(){
    soma = 0
    maior = valores[0]
    menor = valores[0]
/*
    for( var pos = 0; pos < valores.length; pos++){
        if (valores[pos] > maior){
            maior = valores[pos]
        }else if(valores[pos] < menor){                     // Outra maneira para exibição de vetor na tela
            menor = valores[pos]
        }
        res.innerHTML = `<p>O maior numéro informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor numéro informado é ${menor}.</p>`        
    }
*/
    if(valores.length == 0){
        res.innerHTML = '<p>Adicione valores antes de finalizar.<p/>'
    }else{
        for(var pos in valores){ // maneira reduzida para exibição do vetor na tela
            soma += valores[pos]
            var media = soma/valores.length
            if (valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML += `<p> Ao todo, temos ${valores.length} número(s) cadastrado(s).</p>`
        res.innerHTML = `<p>O maior numéro informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor numéro informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}.</p>`
        res.innerHTML += `<p>A média dos números é ${media.toFixed(2)}.</p>`
    }
    }
