const menuButton = document.querySelector(".two");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("one");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const viewer = document.querySelector(".viewer");
const closeViewer = document.querySelector(".close-viewer");
const viewerImage = viewer.querySelector("img");

closeViewer.addEventListener("click", () => {
    viewer.style.visibility = "hidden";
    viewer.style.opacity = "0";
});

viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        viewer.style.visibility = "hidden";
        viewer.style.opacity = "0";
    }
});

function openViewer(imageSrc) {
    viewerImage.src = imageSrc;
    viewer.style.visibility = "visible";
    viewer.style.opacity = "1";
}

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => openViewer(img.src));
});
