import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const GalleryMarkup = CreateGalleryMarkup(galleryItems)

const galleryBox = document.querySelector(".gallery")
galleryBox.insertAdjacentHTML("beforeend", GalleryMarkup)

function CreateGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join("")
}
new SimpleLightbox(".gallery a",{captionsData: "alt",
  captionDelay: "300",
  captionPosition: "bottom",
})

