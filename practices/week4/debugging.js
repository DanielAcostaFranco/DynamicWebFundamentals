const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;

function FindArea(radius) {
    const PI =3.14;
    let area= radius * PI * PI
    return "If the radius is " + radius + " the area is: " + area
}

console.log(FindArea(3));
console.log(FindArea(4));