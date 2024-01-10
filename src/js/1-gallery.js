import simplelightbox from 'https://cdn.jsdelivr.net/npm/simplelightbox@2.14.2/+esm';


const images = [
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
    },
    {
    preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
    },
];



console.log(images);
const gallery = document.querySelector('.gallery');

gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(3, 1fr)";
gallery.style.gridColumnGap = "24px";
gallery.style.gridRowGap = "24px";
gallery.style.margin = "0 156px";

gallery.innerHTML = images.reduce((html, image) => html + `
    <li class="gallery-item">
    <a
    class="gallery-link"
    href="${image.original}">
        <img
        class="gallery-image"
        src="${image.preview}" 
        alt="${image.description}" />
    </a>
    </li>
`, "");



const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => item.style.listStyle = "none");

const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(item => {
    item.style.display = "block";
    item.style.width = "500px";
    item.style.maxWidth = "100%";
    item.style.height = "300px";
});

const lightbox = new SimpleLightbox('.gallery a');

const p = document.createElement('p')
const text = document.createTextNode(`${images.description}`)

lightbox.on('show.simplelightbox', function () {
    const currentImage = lightbox.currentImage;

    if (currentImage && currentImage.hasOwnProperty('alt')) {
        const currentImageAlt = currentImage.alt;

        // Create a new element to hold the alt text
        const altParagraph = document.createElement('p');
        altParagraph.classList.add('lightbox-alt');
        altParagraph.textContent = currentImageAlt;

        // Append the alt text below the image in the lightbox
        currentImage.appendChild(altParagraph);
    }
});

lightbox.on('close.simplelightbox', function () {
    // Remove the alt text when the lightbox is closed
    const altParagraph = document.querySelector('.lightbox-alt');
    if (altParagraph) {
        altParagraph.remove();
    }
});

