//____________________________________________________________________________________________________________________________________________________________________//
                                                    //INICIO DE DEFINIÇÕES DE VARIÁVEIS//


const ligado = document.getElementById( 'ligado' );//aqui ele pega os elementos do HTML e define variáveis dentro do JS
const desligado = document.getElementById( 'desligado' );//aqui ele pega os elementos do HTML e define variáveis dentro do JS
const lamp = document.getElementById( 'lamp' );//aqui ele pega os elementos do HTML e define variáveis dentro do JS


                                                    //FIM DE DEFINIÇÕES DE VARIÁVEIS//
//____________________________________________________________________________________________________________________________________________________________________//

//____________________________________________________________________________________________________________________________________________________________________//
                                                    //INICIO DE FUNÇÕES//

function lampfoiquebrada ()
{
    return lamp.src.indexOf( 'quebrada' ) > -1
}

function lampligado ()//função que troca a imagem da lâmpada para ligado
{
    if ( !lampfoiquebrada () )
    {
    lamp.src = '/assets/ligada.jpg';
    }
}

function lampdesligada ()//função que troca a imagem da lâmpada para ligado
{
    if ( !lampfoiquebrada () )
    {
    lamp.src = '/assets/desligada.jpg';
    }
}

function lampquebrada ()//função que troca a imagem da lâmpada para ligado
{
    lamp.src = '/assets/quebrada.jpg';
}

                                                    //FIM DE FUNÇÕES//
//____________________________________________________________________________________________________________________________________________________________________//

//____________________________________________________________________________________________________________________________________________________________________//
                                                    //INICIO DO CÓDIGO//


ligado.addEventListener ( 'click', lampligado );//Estamos falando que quando clicarmos em cima de ligado ira trocar a imagem utilizando a função lampligado
desligado.addEventListener ( 'click', lampdesligada );
lamp.addEventListener ( 'mouseover', lampligado );
lamp.addEventListener ( 'mouseleave', lampdesligada );
lamp.addEventListener ( 'dblclick', lampquebrada );

                                                    //FIM DO CÓDIGO//
//____________________________________________________________________________________________________________________________________________________________________//