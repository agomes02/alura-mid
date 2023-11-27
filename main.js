function tocaSom (seletorAudio) {
   const.elemento = document.querySelector(idElementoAudio);
    if(elemento&&elemento.localname==='audio'){elemento.play();
                                              }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
if(evento.code==='enter'||evento.code==='space'){ tecla.classlist.add('ativa');
                                                }
}
