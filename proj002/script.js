function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano') //txtano é a caixinha
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value> ano){ //value.length não deixa ficar vazio
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var fetn = window.document.getElementsByName('radetn')
        var idade = ano - Number(fano.value)
        var etnia = ''
        var genero = ''
        var img = document.createElement('img') //criando elemento img pelo JS
        img.setAttribute('id','foto') //atribuindo um id pelo Js
        if(fetn[0].checked){ 
            var etnia = 'humano'
            if (fsex[0].checked){
                var genero = 'masculino'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src','homembebe.png') //Adicionar imagem de maneira dinâmica (JS)
                }else if(idade < 30){
                    img.setAttribute('src','homemjovem.png')
                }else if(idade < 60){
                    img.setAttribute('src','homemadulto.png')
                }else{
                    img.setAttribute('src','homemidoso.png')
                }
            }else if(fsex[1].checked){
                var genero = 'feminino'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src','mulherbebe.png')
                }else if(idade < 30){
                    img.setAttribute('src','mulherjovem.png')
                }else if(idade < 60){
                    img.setAttribute('src','mulheradulta.png')
                }else{
                    img.setAttribute('src','mulheridosa.png')
                }
            }
        }else if(fetn[1].checked){
            var etnia = 'mutu'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','mutubebe.png')
            }else if(idade < 30){
                img.setAttribute('src','mutujovem.png')
            }else if(idade < 60){
                img.setAttribute('src','mutuadulto.png')
            }else{
                img.setAttribute('src','mutuidoso.png')
            }
        }
        if(etnia == 'mutu'){
            res.innerHTML = `Dectamos ${etnia} com ${idade} anos`
        }else if(etnia == 'humano'){
            res.innerHTML = `Dectamos ${etnia} do gênero ${genero} com ${idade} anos`
        }
        res.style.textAlign = 'center'
        res.appendChild(img) //Adicionar imagem abaixo pelo JS
    }
}

// Arrumar o res.style.textAlign das imgs mutu
// Formatar o padding do #res.