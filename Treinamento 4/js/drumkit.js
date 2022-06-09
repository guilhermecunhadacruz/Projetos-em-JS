'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criar_div = (texto) =>{
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div)
}

const exibir = (sons) => {
    Object.keys(sons).forEach(criar_div);
}

const tocar_som = (letra) => {
    const audio = new Audio(`/sounds/${sons[letra]}`);
    audio.play();
}

const adicionar_efeito = (letra) => document.getElementById(letra).classList.add('active'); 

const remover_efeito = (letra) => {
    const div = document.getElementById(letra);
    const remove_active = () => div.classList.remove('active');
    div.addEventListener('transitionend', remove_active)
}

const ativar_div = (evento) => {
    let letra = '';
    if (evento.type == 'click')
    {
        letra = evento.target.id;
    }
    else
    {
        letra = evento.key.toUpperCase();
    }

    const letra_permitida = sons.hasOwnProperty(letra);
    if (letra_permitida)
    {
        adicionar_efeito(letra);
        tocar_som(letra);
        remover_efeito(letra);
    }
}


exibir(sons);
document.getElementById('container').addEventListener('click', ativar_div);

window.addEventListener('keydown', ativar_div);