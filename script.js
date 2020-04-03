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
const arrayOfColorsDarkerOne = [
  "#9999ff",
  "#99ceff",
  "#99ffff",
  "#99ffce",
  "#99ff99",
  "#ceff99",
  "#ffff99",
  "#ffce99",
  "#ff9999",
  "#ff99ce",
  "#ff99ff",
  "#ce99ff"
]
const arrayOfColorsDarkerTwo = [
  "#6666ff",
  "#66b5ff",
  "#66ffff",
  "#66ffb5",
  "#66ff66",
  "#b5ff66",
  "#ffff66",
  "#ffb566",
  "#ff6666",
  "#ff66b5",
  "#ff66ff",
  "#b566ff"
]
const arrayOfColorsDarkerThree = [
  "#3333ff",
  "#339cff",
  "#33ffff",
  "#33ff9c",
  "#33ff33",
  "#b5ff66",
  "#ffff33",
  "#ff9c33",
  "#ff3333",
  "#ff339c",
  "#ff33ff",
  "#9c33ff"
]
const arrayOfColorsDarkerFour = [
  "#0000ff",
  "#0084ff",
  "#00ffff",
  "#00ff84",
  "#00ff00",
  "#84ff00",
  "#ffff00",
  "#ff8400",
  "#ff0000",
  "#ff0084",
  "#ff00ff",
  "#8400ff"
]
const arrayOfColorsDarkerFive = [
  "#0000cc",
  "#0069cc",
  "#00ffff",
  "#00cc69",
  "#00cc00",
  "#69cc00",
  "#cccc00",
  "#cc6900",
  "#cc0000",
  "#cc0069",
  "#cc00cc",
  "#6900cc"
]
const arrayOfColorsDarkerSix = [
  "#000099",
  "#004f99",
  "#009999",
  "#00994f",
  "#009900",
  "#4f9900",
  "#999900",
  "#994f00",
  "#990000",
  "#99004f",
  "#990099",
  "#4f0099"
]
const arrayOfColorsDarkerSeven = [
  "#000066",
  "#003566",
  "#006666",
  "#006635",
  "#006600",
  "#356600",
  "#666600",
  "#663500",
  "#660000",
  "#660035",
  "#660066",
  "#350066"
]
const arrayOfColorsDarkerEight = [
  "#000033",
  "#001a33",
  "#003333",
  "#00331a",
  "#003300",
  "#1a3300",
  "#333300",
  "#331a00",
  "#330000",
  "#33001a",
  "#330033",
  "#1a0033"
]
const arrayOfColorsDarkerNine = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
]
const colorWheel = [
  arrayOfColors,
  arrayOfColorsDarkerOne,
  arrayOfColorsDarkerTwo,
  arrayOfColorsDarkerThree,
  arrayOfColorsDarkerFour,
  arrayOfColorsDarkerFive,
  arrayOfColorsDarkerSix,
  arrayOfColorsDarkerSeven,
  arrayOfColorsDarkerEight,
  arrayOfColorsDarkerNine
]

const body = document.body

const changeColor = (event) => {
  if (event.code === "ArrowRight") {
    colorWheel.forEach(array => {
      const colorPop = array.pop();
      array.unshift(colorPop);
    })
    body.style.backgroundColor = colorWheel[0][0];
  } else if (event.code === "ArrowLeft") {
      colorWheel.forEach(array => {
        const colorPop = array.shift();
        array.push(colorPop);
      })
    body.style.backgroundColor = colorWheel[0][0];
  } else if (event.code === "ArrowUp") {
    const colorWheelPop = colorWheel.pop();
    colorWheel.unshift(colorWheelPop);
    body.style.backgroundColor = colorWheel[0][0];
  } else if (event.code === "ArrowDown") {
    const colorWheelPop = colorWheel.shift();
    colorWheel.push(colorWheelPop);
    body.style.backgroundColor = colorWheel[0][0];
  }
}

document.addEventListener('keydown', changeColor);

