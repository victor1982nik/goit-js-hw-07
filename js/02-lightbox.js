import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
//galleryRef.addEventListener('click', onPictureClick);

render(galleryItems);

function render(gallery) {
    const arr = gallery.map(({original, preview, description }) => {                 
        return  `<li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a></li>`;        
    }).join('');
    
    galleryRef.insertAdjacentHTML('beforeend', arr); 
 }

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
 
 /*
function onPictureClick(e) {
    e.preventDefault();
    
    if (e.target.classList.value !== "gallery__image")         
        return;   
    e.stopPropagation();
}*/



