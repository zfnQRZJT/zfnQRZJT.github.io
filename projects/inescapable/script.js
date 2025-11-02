const find=function(elem){return(document.getElementById(elem))};const display=function(elem,type){if((typeof elem)==="string"){elem=find(elem)}if(type){elem.style.display=type}else{return(elem.style.display)}};
const body=document.body;
const html=document.body.parentElement;
const scrollTopIndicator=function(){body.setAttribute("scrolltop",window.pageYOffset>50)};
var sisti=1;
window.onload=function(){
  body.style.display="block";
  sisti=setInterval(scrollTopIndicator,400);
  var tabble=Array.from(document.querySelector("table").children[0].children);
  tabble.splice(0,1);
  tabble.forEach(function(elem,ind){
    if (elem.getAttribute("rank")) {
      var videoList=Array.from(elem.querySelector("[cl='2']").children);console.log(videoList);videoList.forEach(function(elem2,ind2){
        elem2.children[0].style="background-image:url("+elem2.children[1].children[0].src+")";
        //console.log("background-image:url("+elem2.children[1].children[0].src+")");
        //console.log(elem2.style)
      });
    }
  })
};
const toggleMode=function(){if(body.class==""){body.class="Dark"}else{body.class=""}};
const showDropdown=function(event){event.stopPropagation();if(display("dropdownBelowButton")==="block"){display("dropdownBelowButton","none")}else{display("dropdownBelowButton","block")}};var currentRankSetting=null;
const showMore=function(){/*document.querySelector(".shortenedMB").classList.remove("shortenedMB");find("showMore").remove()*/};html.setAttribute("onscroll","scrollTopIndicator");const rickroll=function(){window.open("/rickr",'_blank')};
var clicks=0;const easterEgg=function(){clicks+=1;if(clicks===5){find("title").innerHTML="Escapable"}if(clicks===1){setTimeout(function(){clicks=0},10000)}};

const rankSetting=function(type,event){
  event.stopPropagation();
  if(currentRankSetting!==type){
    currentRankSetting=type;
    var prisons;
    if (type === -1) {
      var lists = Array.from(document.querySelector(".mainBox tbody").children);
      lists.forEach(function(elem) {
        if (elem.className !== "fakehead") {
          elem.style.display = "";
        }
      });
      console.log(lists[0]);
      prisons=lists.sort(function(a,b) {
        if (a.className !== "fakehead" && b.className !== "fakehead") {
          console.log(a,b);
          let a1=new Date(a.querySelector("td[cl='5']").innerHTML);
          let b1=new Date(b.querySelector("td[cl='5']").innerHTML);
          return(b1-a1);
        }
      });
      console.log(prisons)
    } else if(type===0){
      prisons=Array.from(document.querySelector(".mainBox tbody").children).sort(function(a,b){
        if (a.className !== "fakehead" && b.className !== "fakehead") {
          console.log(a,b);
          let a1=a.getAttribute("pr").split("-");
          let b1=b.getAttribute("pr").split("-");
          let prisonmakers=["00","aw","dc","mb","cv","cr","av","jc","fr","dn","jl","ib","ff","jk","th","ma","es","lg","yo","zf","kp","cb","ss","oa","ke","an","tg","ay","hi","jt","sa","we","le","br"];
          if(prisonmakers.indexOf(a1[0])>prisonmakers.indexOf(b1[0])){
            return 1
          } else if(prisonmakers.indexOf(a1[0])<prisonmakers.indexOf(b1[0])){
            return -1
          } else {return(1*a1[1]-1*b1[1])}
        }
      });
      console.log(prisons)
    } else if(type===1) {
      prisons=Array.from(document.querySelector(".mainBox tbody").children).sort((a,b)=>(b.getAttribute("rank")*1-a.getAttribute("rank")*1));
      prisons.forEach(function(elem){
        if(elem.hasAttribute("sus")){
          elem.style.display="none"
        } else {
          elem.style.display=""
        }
      });
    } else {
      prisons=Array.from(document.querySelector(".mainBox tbody").children);
      var avatarsprisons;
      if(type===2){
        avatarsprisons=["neptunes-monument","ravens-coffin","eleos-citadel","gaias-vault","arctic-bastion","hades-vault-kfc","astraeus-citadel","vertexs-vault","the-pyramid","vault-69","temple-of-ra","hades-vault","neptunes-last-wave","hells-tomb","tardos-cone","glaciers-orb","ares-vault-jjkay03","lokis-final-vault","guardians-vault","poseidons-vault","pandoras-vault"]
      } if(type===3) {
        avatarsprisons=["neptunes-monument","astraeus-citadel","arctic-bastion","ravens-coffin","gaias-vault","hades-vault-kfc","vault-69","hades-vault","neptunes-last-wave","temple-of-ra","hells-tomb","glaciers-orb","tardos-cone","ares-vault-jjkay03","guardians-vault","lokis-final-vault","poseidons-vault","pandoras-vault"]
      }
      var finalProduct=[];
      for(let i=0;i<avatarsprisons.length;i+=1) {
        finalProduct.push(document.querySelector("[ide='"+avatarsprisons[i]+"']"));
        document.querySelector("[ide='"+avatarsprisons[i]+"']").style.display=""
      }
      for(let i=0;i<prisons.length;i+=1){if(!avatarsprisons.includes(prisons[i].getAttribute("ide"))){prisons[i].style.display="none";finalProduct.push(prisons[i])}}
      prisons=finalProduct
    }
    document.querySelector(".mainBox tbody").innerHTML="";
    prisons.forEach(function(elem){document.querySelector(".mainBox tbody").appendChild(elem)})
  }
  let Ranks=document.querySelectorAll(".rankSetting");
  Ranks.forEach(function(elem,ind){if(ind===type+1){elem.classList.add("chosenRank")}else{elem.classList.remove("chosenRank")}});
  const rankTitles = {"-1":"Prisons ordered by date","0":"Prisons ordered by creator","1":"Prisons ordered by rank (subjective)","2":"Prisons ordered by avatardotpng","3":"Prisons ordered by ZeoNight"};
  document.querySelector(".prisonRankType").innerHTML=rankTitles[type + ""];
  //if (type === 1) {NUKEPLUSPLUS();}
}
window.onbeforeunload=function(){for(let i=1;i<body.children.length;i+=1){body.children[i].style.display="none"}};

const avatarScores = {
  "gaias-vault":2+6+6+4+3,
  "arctic-bastion":1+3+2+3+1,
  "eleos-citadel":5+4+5+5+6,
  "ravens-coffin":5+4+3+5+6,
  "kojins-hearth":6+3+3+5+6,
  "neptunes-monument":4+2+3+5+4
}





/*


["2.115","Akuma's Vault","akumas-vault","https://cdn.glitch.global/deb854d2-fda3-43b3-9ad0-9ff600d97b8d/AkumasVault.png?v=1643181559226","",[],["OAKIFY"],"Outer area bans, trapdoor hallways","June 13, 2021","oa-0"],

*/
var shakes2 = [];
const particularElemRemove = function(elmmeemeemmlmes) {
  shakes2.push(setInterval(function() {
    shakes2[shakes2.length - 1] += 5;
    let ssl2 = shakes2[shakes2.length - 1];
    //console.log(ssl2);
    if (ssl2 < 100) {
      elmmeemeemmlmes.forEach(function(mele) {mele.style.opacity = (1-ssl2/100);})
    } else {
      //clearInterval(shakes[shakes.length - 2]);
      elmmeemeemmlmes.forEach(function(mele) {console.log(mele); mele.remove();});
      //console.log(elmmeemeemmlmes);
      console.log("large removal");
      clearInterval(shakes2[shakes2.length - 2]);
      shakes2 = [];
    }
    },10),0)
}
const NUKEPLUSPLUS = function() {
  body.innerHTML += "<div class='bombthreat'>Warning: You have activated a nuclear bomb. Prepare for destruction.</div>"
  document.querySelectorAll("a").forEach(function(alink) {alink.removeAttribute("href")});
  var irremovable = setInterval(function() {
    let targets = body.querySelectorAll("*");
    let myTarget;
    //let attempts = 0;
    //do {
      //attempts ++;
    //} while (attempts < 100 || ((myTarget.childNodes.length === 1 && myTarget.childNodes[0].nodeType === 3) || myTarget.childNodes.length === 0));
    const genTar = function() {
      //console.log("gentar");
      return(targets[Math.floor(targets.length*Math.random())]);
    };
    particularElemRemove([genTar(),genTar(),genTar(),genTar(),genTar(),genTar()]);
    //if (attempts < 100) {
      //console.log("removable");
      shake();
    //}
  },800);
}
var shakes = [];
const shake = function() {
  shakes.push(
    setInterval(function() {
      shakes[shakes.length - 1] += 50;
      var ssl1 = shakes[shakes.length - 1];
      //console.log(ssl1);
      if (ssl1 < 250) {
        document.body.style.transform = "translateX(" + (ssl1/20) + "px)";
      } else if (ssl1 < 750) {
        document.body.style.transform = "translateX(" + (25 - ssl1/20) + "px)";
      } else if (ssl1 < 1000) {
        document.body.style.transform = "translateX(" + (ssl1/20 - 50) + "px)";
      } else {
        clearInterval(shakes[shakes.length - 2]);
        shakes = [];
      }
    },10),0
  )
}
