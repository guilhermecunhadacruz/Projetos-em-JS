'use strict'

const images = [
    { 'id': '1', 'url':'/assets/Imagem1.png'},
    { 'id': '2', 'url':'/assets/Imagem2.png'},
    { 'id': '3', 'url':'/assets/Imagem3.png'},
    { 'id': '4', 'url':'/assets/Imagem4.png'},
    { 'id': '5', 'url':'/assets/Imagem5.png'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, containerItems ) => {
    images.forEach( image => {
        containerItems.innerHTML += `
            <div class="item">
                <img src='${image.url}'></img>
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
