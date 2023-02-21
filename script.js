const find = function(elem) {
  return(document.getElementById(elem));
}
const startBoard = function() {
  find("pixelboard").innerHTML = ("<div class='pixelRow'>" + ("<div class='pixel'></div>").repeat(64) + "</div>").repeat(64);
  setImage(randomColours);
}
var inInterval = false;
var intervalIter = 0;
var interval;
const setImage = function(imgdata) {
  if (!inInterval) {
    inInterval = true;
    intervalIter = 0;
    interval = setInterval(function() {
      if (intervalIter <= 63) {
        for (let i = 0; i <= intervalIter; i++) {
          console.log(i,intervalIter - i);
          find("pixelboard").children[i].children[intervalIter - i].style.background = imgdata[i][intervalIter - i];
        }
      } else {
        for (let i = intervalIter - 63; i <= 63; i++) {
          console.log(i,intervalIter - i);
          find("pixelboard").children[i].children[intervalIter - i].style.background = imgdata[i][intervalIter - i];
        }
      }
      intervalIter += 1;
      if (intervalIter >= 126) {
        inInterval = false;
        clearInterval(interval);
      }
    },15);
  }
}
var randomColours = [];
for (let i = 0; i < 64; i++) {
  randomColours.push([]);
  for (let j = 0; j < 64; j++) {
    randomColours[i].push("#" + ("000000" + (Math.floor(16777216*Math.random())).toString(16)).substr(-6));
  }
}
window.onload = startBoard;
