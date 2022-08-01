// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const createGallertItemsMarkup = galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"      
      alt="${description}"
    />
  </a>
</div>`
).join('');
gallery.insertAdjacentHTML('beforeend', createGallertItemsMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "botton",
});