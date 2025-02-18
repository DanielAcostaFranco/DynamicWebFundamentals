document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".two");
    const menu = document.querySelector(".menu");
    const gallery = document.querySelector(".gallery");
    const viewer = document.querySelector(".viewer");
    const closeViewer = document.querySelector(".close-viewer");
    const viewerImage = viewer.querySelector("img");

    const images = [
        "norris-sm.jpeg", "norris-sm.jpeg", "norris-sm.jpeg",
        "norris-sm.jpeg", "norris-sm.jpeg", "norris-sm.jpeg",
        "norris-sm.jpeg", "norris-sm.jpeg", "norris-sm.jpeg"
    ];

    function generateGallery() {
        gallery.innerHTML = "";
        images.forEach((src, index) => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = src;
            img.alt = `Picture ${index + 1}`;
            img.addEventListener("click", () => openViewer(img.src));
            figure.appendChild(img);
            gallery.appendChild(figure);
        });
    }

    function openViewer(imageSrc) {
        viewerImage.src = imageSrc;
        viewer.style.visibility = "visible";
        viewer.style.opacity = "1";
    }

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

    window.addEventListener("resize", handleResize); 

    generateGallery();
    handleResize();
});
