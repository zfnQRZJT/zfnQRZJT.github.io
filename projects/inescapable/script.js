function find(str) {
  return(document.getElementById(str));
}
var clicks = 0;
      const easterEgg = function() {
        clicks++;
        if(clicks === 5) {
          find("title").innerHTML = "Escapable";
        }
        if(clicks === 1) {
          setTimeout(function () {
            clicks = 0;
          },10000)
        }
      }
