const desligado = document.getElementById ( 'desligado' );
const button = document.getElementById ( 'button' );
let colorindex = 0;
let intervalid = null;


const luzesdotransito = ( event ) => {
    stopautomatic ();
    ligado[event.target.id]();
}

const nextindex = () => {
    if (colorindex < 2 )
    {
    colorindex++;
    }
    else
    {
        colorindex = 0;
    }
}

const changecolor = () => {
    const colors = [ 'vermelho', 'amarelo', 'verde' ];
    const color = colors[ colorindex];
    ligado[color]();
    nextindex();
}

const stopautomatic = () => {
    clearInterval ( intervalid );
}

const ligado = {
    'vermelho': () => desligado.src = '/assets/vermelho.png',
    'amarelo': () => desligado.src = '/assets/amarelo.png',
    'verde': () => desligado.src = '/assets/verde.png',
    'automático': () => intervalid = setInterval( changecolor, 1000 ),
}

button.addEventListener( 'click', luzesdotransito );