var point1, point2;
var color1 = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")", color2 = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
var score1, score2;
var tracer1 = true, tracer2 = true;
var x1, x2;
var movex1, movex2;
var y1, y2;
var movey1, movey2;
var touchx1 = [], touchy1 = [], touchx2 = [], touchy2 = [];
var compteur1 = 0, compteur2 = 0;
var stop = 0;

function debut(){
  point1 = document.getElementById('point1');
  point2 = document.getElementById('point2');
  score1 = document.getElementById('score1');
  score2 = document.getElementById('score2');
  score1.style.color = color1;
  score2.style.color = color2;
  point1.style.backgroundColor = color1;
  point2.style.backgroundColor = color2;
  initPosPoint();
  var blanc = 255, noir = 0, change = 0, deg = 40;
  setInterval(function(){
    document.body.style.backgroundImage = "radial-gradient(rgba("+blanc+","+noir+","+noir+",0.1) 10%, rgba("+noir+","+noir+","+blanc+",0.2) 90%),"+
      "linear-gradient("+deg+"deg,rgba(232, 30, 69, 0.5),rgba(33,74,150,0.5),rgba(240, 116, 74, 0.5),rgba(231,38,31,0.5)),"+
      "linear-gradient("+deg+"deg, rgba("+blanc+","+blanc+","+blanc+",0.7), rgba("+blanc+",128,"+noir+",0.3))";
    if(change == 0){
      blanc--;
      noir++;
      if(blanc == 0){
        change++;
      }
    }
    else{
      blanc++;
      noir--;
      if(noir == 0){
        change--;
      }
    }
    deg += 0.2;
  }, 10);
  var start = document.getElementById("start");
  start.addEventListener("click",demarrage);
}

function demarrage(){
  start.removeEventListener("click",demarrage);
  start.style.animationDuration = "1s";
  start.value = "3";
  document.getElementById('bip').play();
  start.style.cursor = "text";
  setTimeout(function(){
    start.value = "2";
    document.getElementById('bip').play();
    setTimeout(function(){
      start.value = "1";
      document.getElementById('bip').play();
      setTimeout(function(){
        start.value = "GO !";
        document.getElementById('bipFin').play();
        start.style.opacity = "0";
        window.addEventListener("keydown",move);
        if(Math.random() < 0.5){
          movex1 = setInterval(function(){
            x1++;
            point1.style.left = x1+"px";
            limite1();
            trace1();
          }, 5);
          movex2 = setInterval(function(){
            x2--;
            point2.style.left = x2+"px";
            limite2();
            trace2();
          }, 5);
        }
        else{
          movex2 = setInterval(function(){
            x2--;
            point2.style.left = x2+"px";
            limite2();
            trace2();
          }, 5);
          movex1 = setInterval(function(){
            x1++;
            point1.style.left = x1+"px";
            limite1();
            trace1();
          }, 5);
        }
        setTimeout(function(){
          start.value.style = "none";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function initPosPoint(){
  if(window.innerWidth > window.innerHeight){
    y1 = window.innerHeight*0.485;
    y2 = window.innerHeight*0.485;
    x2 = window.innerWidth-window.innerHeight*0.03;
    x1 = 0;
  }
  else{
    y1 = window.innerHeight*0.5-window.innerWidth*0.015;
    y2 = window.innerHeight*0.5-window.innerWidth*0.015;
    x2 = window.innerWidth*0.97;
    x1 = 0;
  }
}

function move(e){
  if(e.keyCode == 68){
    clearInterval(movex1);
    clearInterval(movey1);
    movex1 = setInterval(function(){
      x1++;
      point1.style.left = x1+"px";
      limite1();
      trace1();
    }, 5);
  }
  else if(e.keyCode == 81){
    clearInterval(movex1);
    clearInterval(movey1);
    movex1 = setInterval(function(){
      x1--;
      point1.style.left = x1+"px";
      limite1();
      trace1();
    }, 5);
  }
  else if(e.keyCode == 90){
    clearInterval(movey1);
    clearInterval(movex1);
    movey1 = setInterval(function(){
      y1--;
      point1.style.top = y1+"px";
      limite1();
      trace1();
    }, 5);
  }
  else if(e.keyCode == 83){
    clearInterval(movey1);
    clearInterval(movex1);
    movey1 = setInterval(function(){
      y1++;
      point1.style.top = y1+"px";
      limite1();
      trace1();
    }, 5);
  }
  else if(e.keyCode == 39){
    clearInterval(movex2);
    clearInterval(movey2);
    movex2 = setInterval(function(){
      x2++;
      point2.style.left = x2+"px";
      limite2();
      trace2();
    }, 5);
  }
  else if(e.keyCode == 37){
    clearInterval(movex2);
    clearInterval(movey2);
    movex2 = setInterval(function(){
      x2--;
      point2.style.left = x2+"px";
      limite2();
      trace2();
    }, 5);
  }
  else if(e.keyCode == 38){
    clearInterval(movex2);
    clearInterval(movey2);
    movey2 = setInterval(function(){
      y2--;
      point2.style.top = y2+"px";
      limite2();
      trace2();
    }, 5);
  }
  else if(e.keyCode == 40){
    clearInterval(movex2);
    clearInterval(movey2);
    movey2 = setInterval(function(){
      y2++;
      point2.style.top = y2+"px";
      limite2();
      trace2();
    }, 5);
  }
}

function limite1(){
  if(window.innerWidth > window.innerHeight){
    if(x1 < 0 || x1 > window.innerWidth-window.innerHeight*0.03 || y1 < 0 || y1 > window.innerHeight*0.97){
      gameOver(1);
    }
    for(var i = 0;i < touchx2.length;i++){
      if(x1 >= touchx2[i]-window.innerHeight*0.03 && x1 <= touchx2[i]+window.innerHeight*0.03 && y1 >= touchy2[i]-window.innerHeight*0.03 && y1 <= touchy2[i]+window.innerHeight*0.03){
        gameOver(1);
      }
    }
    for(var i = 0;i < touchx1.length-3;i++){
      if(x1 >= touchx1[i]-window.innerHeight*0.03 && x1 <= touchx1[i]+window.innerHeight*0.03 && y1 >= touchy1[i]-window.innerHeight*0.03 && y1 <= touchy1[i]+window.innerHeight*0.03){
        gameOver(1);
      }
    }
  }
  else{
    if(x1 < 0 || x1 > window.innerWidth*0.97 || y1 < 0 || y1 > window.innerHeight-window.innerWidth*0.03){
      gameOver(1);
    }
    for(var i = 0;i < touchx2.length;i++){
      if(x1 >= touchx2[i]-window.innerWidth*0.03 && x1 <= touchx2[i]+window.innerWidth*0.03 && y1 >= touchy2[i]-window.innerWidth*0.03 && y1 <= touchy2[i]+window.innerWidth*0.03){
        gameOver(1);
      }
    }
    for(var i = 0;i < touchx1.length-3;i++){
      if(x1 >= touchx1[i]-window.innerWidth*0.03 && x1 <= touchx1[i]+window.innerWidth*0.03 && y1 >= touchy1[i]-window.innerWidth*0.03 && y1 <= touchy1[i]+window.innerWidth*0.03){
        gameOver(1);
      }
    }
  }
}

function limite2(){
  if(window.innerWidth > window.innerHeight){
    if(x2 < 0 || x2 > window.innerWidth-window.innerHeight*0.03 || y2 < 0 || y2 > window.innerHeight*0.97){
      gameOver(2);
    }
    for(var i = 0;i < touchx1.length;i++){
      if(x2 >= touchx1[i]-window.innerHeight*0.03 && x2 <= touchx1[i]+window.innerHeight*0.03 && y2 >= touchy1[i]-window.innerHeight*0.03 && y2 <= touchy1[i]+window.innerHeight*0.03){
        gameOver(2);
      }
    }
    for(var i = 0;i < touchx2.length-3;i++){
      if(x2 >= touchx2[i]-window.innerHeight*0.03 && x2 <= touchx2[i]+window.innerHeight*0.03 && y2 >= touchy2[i]-window.innerHeight*0.03 && y2 <= touchy2[i]+window.innerHeight*0.03){
        gameOver(2);
      }
    }
  }
  else{
    if(x2 < 0 || x2 > window.innerWidth*0.97 || y2 < 0 || y2 > window.innerHeight-window.innerWidth*0.03){
      gameOver(2);
    }
    for(var i = 0;i < touchx1.length;i++){
      if(x2 >= touchx1[i]-window.innerWidth*0.03 && x2 <= touchx1[i]+window.innerWidth*0.03 && y2 >= touchy1[i]-window.innerWidth*0.03 && y2 <= touchy1[i]+window.innerWidth*0.03){
        gameOver(2);
      }
    }
    for(var i = 0;i < touchx2.length-3;i++){
      if(x2 >= touchx2[i]-window.innerWidth*0.03 && x2 <= touchx2[i]+window.innerWidth*0.03 && y2 >= touchy2[i]-window.innerWidth*0.03 && y2 <= touchy2[i]+window.innerWidth*0.03){
        gameOver(2);
      }
    }
  }
}

function trace1(){
  if(tracer1 === true){
    tracer1 = false;
    var div = document.createElement("div");
    div.style.top = y1+"px";
    div.style.left = x1+"px";
    div.style.backgroundColor = color1;
    document.body.insertBefore(div, point1);
    touchx1[compteur1] = x1;
    touchy1[compteur1] = y1;
    compteur1++;
    setTimeout(function(){
      tracer1 = true;
    }, 800); //Mettre 800 ou 100
  }
}

function trace2(){
  if(tracer2 === true){
    tracer2 = false;
    var div = document.createElement("div");
    div.style.top = y2+"px";
    div.style.left = x2+"px";
    div.style.backgroundColor = color2;
    document.body.insertBefore(div, point1);
    touchx2[compteur2] = x2;
    touchy2[compteur2] = y2;
    compteur2++;
    setTimeout(function(){
      tracer2 = true;
    }, 800); //Mettre 800 ou 100
  }
}

function gameOver(a){
  if(arguments[0] == 1 && start.style.fontSize != "15vmin"){
    score2.innerHTML = parseInt(score2.innerText)+1;
  }
  else if(arguments[0] == 2 && start.style.fontSize != "15vmin"){
    score1.innerHTML = parseInt(score1.innerText)+1;
  }
  window.removeEventListener("keydown",move);
  clearInterval(movex1);
  clearInterval(movey1);
  clearInterval(movex2);
  clearInterval(movey2);
  document.getElementById('bipFin').play();
  start.style.display = "block";
  start.style.opacity = "1";
  start.style.fontSize = "15vmin";
  start.style.animationDuration = "3.4s";
  start.value = "JOUEUR "+arguments[0]+" PERD !";
  setTimeout(function(){
    start.style.opacity = "0";
    for(var i = 0;i <= touchx1.length;i++){
      (function(i){
        setTimeout(function(){
          point1.style.left = touchx1[compteur1-i]+"px";
          point1.style.top = touchy1[compteur1-i]+"px";
          point2.style.left = touchx2[compteur2-i]+"px";
          point2.style.top = touchy2[compteur2-i]+"px";
        }, i*50);
      }(i));
    }
    for(var j = 0;j < touchx1.length*2;j++){
      (function(j){
        setTimeout(function(){
          document.getElementsByTagName('div')[document.getElementsByTagName('div').length-3-j].style.display = "none";
        }, j*25);
      }(j));
    }
    setTimeout(function(){
      compteur1 = 0;
      compteur2 = 0;
      touchx1 = [];
      touchx2 = [];
      touchy1 = [];
      touchy2 = [];
      initPosPoint();
      start.style.fontSize = "20vmin";
      start.style.cursor = "pointer";
      start.value = "JOUER";
      start.style.opacity = "1";
      start.addEventListener("click",demarrage);
    }, touchx1.length*50);
  }, 4000);
}
window.addEventListener("load",debut);
