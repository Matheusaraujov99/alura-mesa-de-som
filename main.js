function oSomDaNoite (seletorAudio) {
   const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio') {

         element.play();
    
    }

    else {

        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    
    const memes = tecla.classList[1]; 

    const idAudio = `#som_${memes}` //template string

    tecla.onclick = function () {
        oSomDaNoite(idAudio)
    }

    tecla.onkeydown = function(event) {
        
        if(event.code === 'Space'|| event.code === 'Enter') {
            tecla.classList.add('ativa'); 
        }  
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
 
}