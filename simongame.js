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
  }, 1000); 
}

function changegreen(){
  var src = document.getElementById('topleft');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor = '#00ff00';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 1000); 
}

function changeyellow(){
  var src = document.getElementById('bottomleft');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor='#ffff00';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 1000); 
}

function changeblue(){
  var src = document.getElementById('bottomright');
  var prevColor = src.style.backgroundColor;
  src.style.backgroundColor = '#0059ff';
  setTimeout(function(){
      src.style.backgroundColor = prevColor;
  }, 1000); 
}

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

function repeat(func, times) {
  if (times>0){
  setTimeout(function(){ func(); },1000);
  times=times-1;
  repeat(func, times);
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
  console.log("rp g" +randompattern);
  break;
case 'r':
  changered();
  randompattern.push('r');
  console.log("rp r" +randompattern);
  break;
case 'y':
    changeyellow();
    randompattern.push('y');
    console.log("rp y" +randompattern);
    break;
case 'b':
    changeblue();
    randompattern.push('b');
    console.log("rp b" +randompattern);
    break;
}
}

function userinput() {
  document.getElementById('topright').onclick= function(){
  userpattern.push('r');
  userclicks+=1;
 };

 document.getElementById('topleft').onclick= function(){
  userpattern.push('g');
  userclicks+=1;
 };

 document.getElementById('bottomleft').onclick= function(){
  userpattern.push('y');
  userclicks+=1;
 };

 document.getElementById('bottomright').onclick= function(){
  userpattern.push('b');
  userclicks+=1;
 };
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
    alert("Level "+level);
    console.log("levelafter+1 =" +level);
    start();
  } else {
    level=1;
    randompattern=[];
    userpattern=[];
    userclicks=0;
    alert("Sorry! Start Again")
    console.log("start again");
  }
}

function start(){
repeat(lightup, level);
console.log(userclicks);
console.log(level);
if (userclicks!=level){
  setTimeout(function(){ check(); }, 5000);
}
}
