//Завдання 1
     const display = document.getElementById("display");
     const upBtn = document.getElementById("upBtn");
     const downBtn = document.getElementById("downBtn");
     let number = 10;
     upBtn.addEventListener("click", () => {
         number++;
         display.textContent = number;
     });
     downBtn.addEventListener("click", () => {
         number--;
         display.textContent = number;
     });
//Завдання 2
const images = [
    "bro-tebe-nado-trenirovatsja-memy-pro-simpla-2.jpg",
    "1705396131_balthazar-club-p-mashina-subo-vkontakte-35.jpg",
    "KMO_090981_18240_1_t222_123207.jpg",
];
let index = 0;
const imgElement = document.getElementById("image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
updateGallery();
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
function showPrev() {
    if (index > 0) {
        index--;
        updateGallery();
    }
}
function showNext() {
    if (index < images.length - 1) {
        index++;
        updateGallery();
    }
}
function updateGallery() {
    imgElement.src = images[index];
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === images.length - 1;
}
//Завдання 3
function changeColor(color) {
    document.getElementById("textBox").style.color = color;
}