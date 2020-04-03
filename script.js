const arrayOfColors = [
  "#ccccff",
  "#cce6ff",
  "#ccffff",
  "#ccffe6",
  "#ccffcc",
  "#e6ffcc",
  "#ffffcc",
  "#ffe6cc",
  "#ffcccc",
  "#ffcce6",
  "#ffccff",
  "#e6ccff"
]

const body = document.body

const changeColor = (event) => {
  if (event.code === "ArrowRight") {
    let colorPop = arrayOfColors.pop();
    arrayOfColors.unshift(colorPop);
    console.log(arrayOfColors);
    body.style.backgroundColor = arrayOfColors[0];
  } else if (event.code === "ArrowLeft") {
    let colorShift = arrayOfColors.shift();
    arrayOfColors.push(colorShift);
    console.log(arrayOfColors);
    body.style.backgroundColor = arrayOfColors[0];
  }

}


document.addEventListener('keydown', changeColor);

