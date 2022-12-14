import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const getGallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
          </div>`;
  })
  .join("");

getGallery.insertAdjacentHTML("beforeend", createGallery);

getGallery.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src = '${e.target.dataset.source}' width="800" height="600"/>`);

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
