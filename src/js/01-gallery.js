import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// import SimpleLightbox from "../../node_modules/simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


// console.log(galleryItems);
console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImageMarkups(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageMarkups(images) {
  return images.map(({ preview, original, description }) => {
      return `
<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </li>
`;
  }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
