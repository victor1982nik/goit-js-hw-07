import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);

let instance;
const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onPictureClick);

render(galleryItems);

function render(gallery) {    
    const arr = gallery.map((picture) => {        
        return `<div class="gallery__item"><a class="gallery__link" href="${picture.original}">
        <img
            class="gallery__image"
            src="${picture.preview}"
            data-source="${picture.original}"
            alt="${picture.description}"/>
        </a></div>`;        
    }).join('');
   
    galleryRef.insertAdjacentHTML('beforeend', arr);    
}

function onPictureClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG')
        return;    
      
    instance = basicLightbox.create(`<img src="${e.target.dataset.source}" >`);
    
    instance.show();
    document.addEventListener("keydown", onEscPressed); 
}

function onEscPressed(e) {
    e.preventDefault();

    console.log(e.element);
    if (e.close = 'ESCAPE') {
        const galleryRef = document.querySelector('.gallery');
        instance.close();
        document.removeEventListener("keydown", onEscPressed); 
    }    
}