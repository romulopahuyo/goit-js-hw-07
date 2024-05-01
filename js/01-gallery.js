import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");


const createGallery = (galleryItems) => {
  const galleryMarkup = galleryItems
    .map((galleryItem) => {
      const { preview, original, description } = galleryItem;

      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"s
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
  return galleryMarkup;
};

 //Hang the Photos on the Wall:
// After preparing all our photos, we take the entire collection (now ready for display) and put it up on our "gallery" wall on the webpage.

const photosMarkup = createGallery(galleryItems);
console.log(photosMarkup);
galleryList.insertAdjacentHTML("beforeend", photosMarkup);

//  Make the Photos Interactive:

// Now, we want to make these photos do something when someone clicks on them:
const handleGalleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const urlOriginal = event.target.dataset.source;
  console.log(urlOriginal);

  //   create new basicLightBox instance
  const instance = basicLightbox.create(`<img src="${urlOriginal}">`);
  instance.show();


  //   handleOnEscKeyPress
  const handleOnEscKeyPress = (event) => {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener(" keydown", handleOnEscKeyPress);
    }
  };

  window.addEventListener("keydown", handleOnEscKeyPress);
};

// 7. Setting Up the Gallery:
 galleryList.addEventListener("click", handleGalleryClick);

// //-----------------------------------------
// console.log(galleryItems);
