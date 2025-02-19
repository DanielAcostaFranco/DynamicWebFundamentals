document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".two");
    const menu = document.querySelector(".menu");
    const gallery = document.querySelector(".gallery");

    const images = [
        "norris-sm.jpeg", "norris-sm.jpeg", "norris-sm.jpeg",
        "norris-sm.jpeg", "norris-sm.jpeg", "norris-sm.jpeg",
        "norris-sm.jpeg", "norris-sm.jpeg", "norris-sm.jpeg"
    ];

    function createImageElement(src, index) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Picture ${index + 1}`;
        img.addEventListener("click", () => openViewer(img.src));
        figure.appendChild(img);
        return figure;
    }

    function generateGallery() {
        gallery.innerHTML = "";
        images.forEach((src, index) => {
            const figure = createImageElement(src, index);
            gallery.appendChild(figure);
        });
    }

    function createViewer() {
        const viewer = document.createElement("div");
        viewer.classList.add("viewer");
        viewer.style.visibility = "hidden";
        viewer.style.opacity = "0";

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-viewer");
        closeBtn.textContent = "X";
        closeBtn.addEventListener("click", closeViewer);

        const img = document.createElement("img");
        img.alt = "Expanded Image";

        viewer.appendChild(closeBtn);
        viewer.appendChild(img);
        document.body.appendChild(viewer);

        return viewer;
    }

    const viewer = createViewer();
    const viewerImage = viewer.querySelector("img");

    function openViewer(imageSrc) {
        viewerImage.src = imageSrc;
        viewer.style.visibility = "visible";
        viewer.style.opacity = "1";
    }

    function closeViewer() {
        viewer.style.visibility = "hidden";
        viewer.style.opacity = "0";
    }

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
