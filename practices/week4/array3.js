const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

console.log("The GPA points are: " + gpaPoints);

const pointsTotal = gpaPoints.reduce((acc, current) => acc + current, 0); // Sum of all GPA points
const gpa = pointsTotal / gpaPoints.length; // Calculate the GPA

console.log("Your GPA is: " + gpa.toFixed(2));
