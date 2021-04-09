function on(elemento) {
    if(elemento.checked) {
        document.getElementById('corpo').style.backgroundColor = '#FFF';
        let grupos = document.querySelectorAll('.grupo'); 
        for(let i = 0; i < grupos.length; i++) {
            grupos[i].style.backgroundColor = '#FFF';
        }
        let botoes = document.querySelectorAll('.botao');
        for(let i = 0; i < botoes.length; i++) {
            botoes[i].style.border = 'thin solid #lightgray';
        }
        document.body.style.color = '#141414';
        document.getElementById('logo').src = "img/instagram-logo.png";
        document.getElementById('esqueceu').style.color = '#141414';
    } else {
        document.getElementById('corpo').style.backgroundColor = '#141414';
        let grupos = document.querySelectorAll('.grupo');
        for(let i = 0; i < grupos.length; i++) {
            grupos[i].style.backgroundColor = '#141414';
        }
        document.body.style.color = '#FFF';
        document.getElementById('logo').src = "img/instagram-logo2.png";
        document.getElementById('esqueceu').style.color = '#FFF';
    }
}