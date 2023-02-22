"use strict";
const find = function(elem) {
  return(document.getElementById(elem));
}
const startBoard = function() {
  find("pixelboard").innerHTML = ("<div class='pixelRow'>" + ("<div class='pixel'></div>").repeat(64) + "</div>").repeat(64);
  intervals.push([unsplitImageData(zfnPixel),0]);
}
var intervals = [];
setInterval(function() {
  if (intervals.length) {
    console.log(intervals);
    for (let intid = 0; intid < intervals.length; intid++) {
    if (intervals[intid][1] <= 63) {
      for (let i = 0; i <= intervals[intid][1]; i++) {
        find("pixelboard").children[i].children[intervals[intid][1] - i].style.background = intervals[intid][0][i][intervals[intid][1] - i];
      } 
    } else {
      for (let i = intervals[intid][1] - 63; i <= 63; i++) {
        find("pixelboard").children[i].children[intervals[intid][1] - i].style.background = intervals[intid][0][i][intervals[intid][1] - i];
      }
    }
    intervals[intid][1] += 1;
    if (intervals[intid][1] > 126) {
      intervals.splice(intid,1);
      intid -= 1;
    }
  }}
},15);
const unsplitImageData = function(imgdata) {
  let retArr = [];
  for (let k = 0; k < imgdata.length/4; k++) {
    retArr.push("#" + ("000000" + (256*256*imgdata[4*k] + 256*imgdata[4*k + 1] + imgdata[4*k + 2]).toString(16)).substr(-6));
  }
  let retArr2 = [];
  for (let k = 0; k < 64; k++) {
    retArr2.push([]);
    for (let l = 0; l < 64; l++) {
      retArr2[k].push(retArr[64*k + l]);
    }
  }
  return(retArr2);
}
var randomColours = [];
for (let i = 0; i < 64; i++) {
  randomColours.push([]);
  for (let j = 0; j < 64; j++) {
    randomColours[i].push("#" + ("000000" + (Math.floor(16777216*Math.random())).toString(16)).substr(-6));
  }
}
var chessColours = [];
for (let i = 0; i < 64; i++) {
  chessColours.push([]);
  for (let j = 0; j < 64; j++) {
    if ((Math.floor(i/8) + Math.floor(j/8)) % 2) {chessColours[i].push("#000000");} else {chessColours[i].push("#00AA55");}
  }
}
/*var zfnDraw1 = fetch('/zfnPixel.png')
  .then(res => res.blob()) // Gets the response and returns it as a blob
  .then(blob => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // convert image file to base64 string
      console.log(reader.result);
    }, false);

    if (blob) {
      reader.readAsDataURL(blob);
    }
  });
*/
let prevh = 0;
const scrollEvent = function() {
  let h = Math.round(find("mainbody").scrollTop/document.body.offsetHeight);
  if (h != prevh) {
    switch(h) {
      case 0:
        intervals.push([unsplitImageData(zfnPixel),0]);
        break;
      case 1:
        intervals.push([unsplitImageData(metezori),0]);
        break;
      case 2:
        intervals.push([chessColours,0]);
        break;
      case 3:
        intervals.push([unsplitImageData(intGraph),0]);
        break;
      case 4:
        intervals.push([unsplitImageData(metezori),0]);
        break;
    }
  }
}
import {images as images} from "/pixeldataexport.js";
const zfnPixel = images.zfnPixel;
const metezori = images.metezori;
const intGraph = images.intGraph;
console.log(unsplitImageData(zfnPixel));
window.onload = startBoard;
window.onscroll = scrollEvent;
