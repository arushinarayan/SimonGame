let colourbtns= ['r', 'g', 'y', 'b'];
let level=1;
let randompattern=[];
let userpattern=[];
let userclicks=0;

function changered(){
  var src = document.getElementById('topright');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor = '#ff0000';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 600); 
}

function changegreen(){
  var src = document.getElementById('topleft');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor = '#00ff00';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 600); 
}

function changeyellow(){
  var src = document.getElementById('bottomleft');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor='#ffff00';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 600); 
}

function changeblue(){
  var src = document.getElementById('bottomright');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor = '#0059ff';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 600); 
}

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

function repeat(func, times) {
  if (times>0){
  func();
  times=times-1;
  setTimeout(function(){repeat(func, times)},1000);
} else {
  console.log("lightup ends")
}
}

function lightup(){
let index = getRandomNumber(0, 3);
console.log("index=" +index)
console.log("colour" +colourbtns[index])
switch (colourbtns[index]){
case 'g':
  changegreen();
  randompattern.push('g');
  console.log("rp g=" +randompattern);
  break;
case 'r':
  changered();
  randompattern.push('r');
  console.log("rp r=" +randompattern);
  break;
case 'y':
    changeyellow();
    randompattern.push('y');
    console.log("rp y=" +randompattern);
    break;
case 'b':
    changeblue();
    randompattern.push('b');
    console.log("rp b=" +randompattern);
    break;
}
}

function rclick(){
  userpattern.push('r');
  userclicks+=1;
}

function gclick(){
  userpattern.push('g');
  userclicks+=1;
}

function bclick(){
  userpattern.push('b');
  userclicks+=1;
}

function yclick(){
  userpattern.push('y');
  userclicks+=1;
}

function check(){
  console.log("check")
  console.log("rp=" +JSON.stringify(randompattern));
  console.log("up=" +JSON.stringify(userpattern));
if(JSON.stringify(randompattern)==JSON.stringify(userpattern)){
    level+=1;
    randompattern=[];
    userpattern=[];
    userclicks=0;
    alert("Way to go! \nLevel "+level);
    console.log("levelafter+1 =" +level);
    start();
  } else {
    level=1;
    randompattern=[];
    userpattern=[];
    userclicks=0;
    alert("Sorry, you lost :/ \nStart Again!")
    console.log("start again");
  }
}

function start(){
repeat(lightup, level);
console.log(userclicks);
console.log(level);
if (userclicks!=level){
  setTimeout(function(){ check(); }, level*2000);
}
}
