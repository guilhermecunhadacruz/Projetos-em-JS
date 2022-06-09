'use strict';

const formatar_digito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) =>{
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const quantidade_segundos  = tempo % 60;
    const quantidade_minutos  = Math.floor((tempo % (60 * 60)) / 60);
    const quantidade_horas  = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const quantidade_dias  = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatar_digito(quantidade_segundos);
    minutos.textContent = formatar_digito(quantidade_minutos);
    horas.textContent = formatar_digito(quantidade_horas);
    dias.textContent = formatar_digito(quantidade_dias);
} 

const contagem_regressiva = (tempo) => {
    const para_contagem = () => clearInterval(id);
    
    const contar = () => {
        if (tempo == 0)
        {
            para_contagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
} 

const tempo_restante = () =>{
    const data_evento = new Date ('2022-06-05 20:00:00');
    const hoje = Date.now();
    return Math.floor((data_evento- hoje) / 1000);
}

contagem_regressiva(tempo_restante());