import {galleryItems} from "./gallery-items.js"
// Change code below this line
console.log(galleryItems)

const GalleryMarkup = CreateGalleryMarkup(galleryItems)

const galleryBox = document.querySelector(".gallery")
galleryBox.insertAdjacentHTML("beforeend", GalleryMarkup)

function CreateGalleryMarkup(galleryItems) {
  return galleryItems .map(({preview, original, description}) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original} ">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    })
    .join("")
}

galleryBox.addEventListener("click", clickOnGalleryImg)

function clickOnGalleryImg(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== "IMG") {
    return
  }
    const instance = basicLightbox.create(`
    <img
    src="${evt.target.getAttribute("data-source")}"
    alt="${evt.target.getAttribute("alt")}" 
    class = "gallery__image">
    width="800" 
    height="600"
    `,
      
    {onShow: (instance) => {document.body.addEventListener("keydown",closeEsc)},
    onClose: (instance) => {document.body.removeEventListener("keydown",closeEsc)},
    })
    instance.show()
    function closeEsc(e) {
      if (e.code === "Escape") {
        instance.close()
      }
    }
  
}
