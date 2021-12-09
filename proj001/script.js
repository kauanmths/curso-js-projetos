function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minuto}min`
    if(hora < 12) {
        img.src = 'fotomanha.jpg'
        window.document.body.style.background = '#97c8f1'
    }else if(hora <= 18){
        img.src = 'fototarde.jpg'
        window.document.body.style.background = '#ffb76b'
    }else{
        img.src = 'fotonoite.jpg'
        window.document.body.style.background = '#515154'
    }
}
