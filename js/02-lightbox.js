import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const getGallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`;
  })
  .join("");

getGallery.insertAdjacentHTML("beforeend", createGallery);

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: "250",
});
