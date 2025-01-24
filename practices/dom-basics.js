const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section")
const newParagraph2 = document.createElement("h2")
newParagraph2.innerText = "DOM Basics";
newSection.appendChild(newParagraph2)
const newParagraph3 = document.createElement("p");
newParagraph3.innerText ="This was added through JavaScript by Daniel";
newSection.appendChild(newParagraph3);


document.body.appendChild(newSection);
