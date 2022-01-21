const ABT = document.querySelector('.about');
const  WRAP = document.querySelector('.wrapper');

ABT.classList.remove('hide');
WRAP.classList.add('hide');

function show(current) {
    current.innerHTML == "ABOUT US" ? ABT.innerHTML="RESUME" : ABT.innerHTML = "ABOUT US";
    ABT.classList.toggle("hide");
    WRAP.classList.toggle("hide");
}
ABT.addEventListener("click", function(){show(this);}, false);



var stable=document.querySelector('.designs');
 function mint(){
var  get= document.querySelector('#mybar');
var dig = document.querySelector("#myth");
var  refeRence=document.querySelector("#bars");
var diya = document.querySelector("#m-bar");
var priya =document.querySelector("#jqbar");


 /*This set the variable reference  for loader 1;*/
var width = 10;
var d = setInterval(loader, 10);
//This set the variable container for loader 2
var width2=10; 
var set2=setInterval(loader2, 10);  
//This set the variable reference for loader 3
var width3=10;
var set3=setInterval(loader3, 10);
//create a time handler for javascript
//This set the variable reference for loader 4
var width4=10;
var set4=setInterval(loader4, 10);
//This set the variable reference for loader 5
var width5 = 10;
var set5 = setInterval(loader5,10);





 function loader() {
    if (width >= 89) {
        clearInterval(d);
    }
 else {
   width ++;
   get.style.width= width + '%';
   get.innerHTML = width * 1 + '%';
 }
}

function loader2() {
  if (width2 >= 79) {
      clearInterval(set2);
  }
else {
 width2 ++;
 dig.style.width= width2 + '%';
 dig.innerHTML = width2 * 1 + '%';
}
}

function loader3(){
  if(width3 >= 87){
    clearInterval(set3);
} else{
  width3++;
  refeRence.style.width=width3 + "%";
  refeRence.innerHTML = width3 * 1 + "%";
}
}

function loader4(){
if (width4 >= 89) {
  clearInterval(set4);
}
else {
width4 ++;
diya.style.width= width4 + '%';
diya.innerHTML = width4 * 1 + '%';
}
}

function loader5(){
  if (width5 >= 90) {
    clearInterval(set5);
  }
  else {
  width5 ++;
  priya.style.width= width5 + '%';
  priya.innerHTML = width5 * 1 + '%';
  }
  }
  


 }
stable.onmouseenter=mint;


const openBtn = document.querySelector('#open');
var sap = document.querySelector('#sap');
var main=document.querySelector('.main-contain li');
 
function open(){
sap.style.height = "100%";
main.style.display="block";
}
openBtn.onclick = open;
function close(){
  sap.style.height = "0%";
  main.style.display = "none";
}

$(function(){
 $('.drag').draggable({scroll: true});
 $(this).draggable({axis: 'x'});

 $("#node").scroll(function(){
   $(this).slideToggle();
 });
 });
function openNav(){
  document.getElementById("MySideNav").style.width = "250px";
  document.getElementById ("main").style.marginLeft = "250px";
}

function closeNav(){
  document.getElementById("MySideNav").style.width = "0";
  document.getElementById ("main").style.marginLeft = "0";
}