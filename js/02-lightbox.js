import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Import Photo Details:

// Get the details of photos from a file named 'gallery-items.js'. These details include a preview image, the original image, and a description for each photo.

// 2. Find the Gallery Space on the Webpage:

// Look for the place on the webpage where the gallery will be displayed. This place is identified by the class name "gallery".

// 3. Create Gallery Items:

// For each photo detail obtained:
// Create a list item (<li>) for the photo with a class "gallery__item".
// Inside this list item, place a link (<a>) that points to the original (large) version of the photo. This link has a class "gallery__link".
// Inside the link, insert an image (<img>) that displays the preview image, keeps track of the original image URL (for easy access), and includes the photo's description as its alternate text.
// Combine all the individual photo items into one big string of HTML.

// 4. Display the Gallery:

// Add the big string of HTML (which includes all the photo items) into the gallery space found on the webpage. This is done by inserting the HTML just before the end of the gallery element.

// 5. Initialize Lightbox Functionality:

// Set up a lightbox feature for the gallery. This lightbox is activated when any link within the gallery is clicked. It has settings to show captions (using the alt text of the images), display captions at the bottom, and delay the appearance of captions by 250 milliseconds.

// console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
};
const photosMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
