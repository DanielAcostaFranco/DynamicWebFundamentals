const themeSelector = document.getElementById("theme-select");
function changeTheme() {
}


themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const body = document.body;
    const logo = document.querySelector(".logo");

    if (themeSelector.value === "dark") {
        body.classList.add("dark");
        logo.src = "byui-logo_dark.png";
    } else {
        body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp";
    }
}
