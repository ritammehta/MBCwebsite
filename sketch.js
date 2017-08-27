var stars = [];
var dock11;
var arcade;
var jesse;
var kevin;
var kyle;
var titleTimevar = 0;
var fontpoint = 12;
var fontyfonty = 150;
var greenFill = 1;
var openText = "MBC PRESENTS:"
var gameName = "IMPROV QUEST"
var startGame;
var jesseX;
var jesseY;
var kevinX;
var kevinY;
var kyleX;
var kyleY;
var character;
var playMe;
var score = 0;
var itemSpeed = 10;
var itemY = 0;
var itemX = random(0, windowWidth);
var item;
var itemGood;
var itemBad;
var jesseGood;
var jesseBad;
var goodOrBad = true;

function preload(){
  dock11 = loadFont('assets/heavy_dock11.otf');
  arcade = loadFont('assets/ARCADECLASSIC.ttf');
  jesse = loadImage('assets/jesse.png');
  kyle = loadImage('assets/kyle.png');
  kevin = loadImage('assets/kevin.png');
  jesseGood = loadImage('assets/jesseGood.JPG');
  jesseBad = loadImage('assets/jesseBad.JPG');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	background('black');
  textFont(dock11);
	for(i = 0; i < 200; i ++){
		stars[2*i] = random(windowWidth)
		stars[(2*i)+1] = random(windowHeight)
	}
  starDraw();
  fill('green');
  imageMode(CENTER);
  jesseX = windowWidth/4;
  jesseY = windowHeight/2;
  kevinX = 2*windowWidth/4;
  kevinY = windowHeight/2;
  kyleX = 3*windowWidth/4;
  kyleY = windowHeight/2;
}

function draw() {
  if (titleTimevar == 0){
      titleTime(fontpoint, fontyfonty);
      fontpoint += .5;
      fontyfonty -= 2;
  }
  if (titleTimevar == 1){
    textFont(arcade);
    titleTime2();
  }
  if (titleTimevar == 2){
    choosePlayer();
  }
  if(titleTimevar == 3){
    playGame();
  }
}

function pacMan(xPos, yPos){
	fill('yellow');
	ellipse(xPos,yPos,50,50)
	fill('black');
	triangle(xPos,yPos,xPos+30,yPos+15,xPos+30,yPos-15);
}

function starDraw(){
  background('black');
	fill('white');
	for(i = 0; i < 200; i++){
		ellipse(stars[2*i], stars[(2*i)+1], 3);
		}
}

function titleTime(fontSize,textY){
  fill((textY*10)%255, 100, 200)
  textSize(fontSize);
  textAlign(CENTER);
  text(openText,windowWidth/2,windowHeight/2 - textY)
  if(textY == 0 || textWidth(openText) + 20 >= windowWidth){
    fill(255, 100, 200)
    text(openText,windowWidth/2,windowHeight/2 - textY)
    fontyfonty = 60;
    titleTimevar = 1
  }
}

function titleTime2(){
  if(textWidth(gameName) < windowWidth - 10 && fontyfonty < 100){
    textSize(fontyfonty++);
  }
  else{
    fill(255);
    text(gameName, windowWidth/2, windowHeight / 2 + windowHeight/10)
    rectMode(CENTER);
    fill('white');
    rect(windowWidth / 2, windowHeight/2 + windowHeight/6, windowWidth/3, windowHeight/15);
    fill('black');
    rect(windowWidth / 2, windowHeight/2 + windowHeight/6, (windowWidth/3)-5, (windowHeight/15)-5);
    fill('255')
    textSize(windowHeight/20);
    text("PLAY", windowWidth/2, windowHeight/2 + windowHeight/6 + windowHeight / 15 - windowHeight/20)
    textSize(fontyfonty);
  }
}

function mouseClicked(){
  if(titleTimevar == 1){
    if(mouseX < (windowWidth/2 + windowWidth/6) && mouseX > (windowWidth/2 - windowWidth /6)
    && mouseY > (windowHeight/2 + windowHeight / 6 - windowHeight/30) && mouseY < (windowHeight/2 + windowHeight / 6 + windowHeight/30)){
      begin();
    }
  }
  if(titleTimevar == 2){
    if(mouseX < (jesseX + 50) && mouseX > (jesseX - 50) && mouseY > (jesseY - 50) && mouseY < (jesseY + 50)){
      character = "jesse";
      titleTimevar = 3;
    }
    if(mouseX < (kevinX + 50) && mouseX > (kevinX - 50) && mouseY > (kevinY - 50) && mouseY < (kevinY + 50)){
      character = "kevin";
      titleTimevar = 3;
    }
    if(mouseX < (kyleX + 50) && mouseX > (kyleX - 50) && mouseY > (kyleY - 50) && mouseY < (kyleY + 50)){
      character = "kyle";
      titleTimevar = 3;
    }
  }
}

function begin(){
  titleTimevar = 2;
}

function choosePlayer(){
  textSize(30);
  starDraw();
  image(jesse, jesseX, jesseY, 100, 100);
  text("Jesse", jesseX, jesseY + 75);
  image(kevin, kevinX, kevinY, 100, 100);
  text("Kevin", kevinX, kevinY + 75);
  image(kyle, kyleX, kyleY,100,100);
  text("Kyle", kyleX, kyleY + 75)
}

function playGame(){
  starDraw();
  textSize(40);
  text (score, windowWidth/2, 100);
  textSize(30);
  text ("Pick up good items! avoid bad items!", windowWidth / 2, 50);
  if (character == "jesse"){
    playMe = jesse;
    itemGood = jesseGood;
    itemBad = jesseBad;
  }
  else if (character == "kevin"){
    playMe = kevin;
  }
  else if (character == "kyle"){
    playMe = kyle;
  }
  image(playMe, mouseX, windowHeight - 100, 100, 100);
  if(goodOrBad == true){
    item = itemGood;
  }
  else{
    item = itemBad;
  }
  image(itel, itemX, itemY, 50, 50);
  itemY = itemY + itemSpeed;
  if(itemY >= windowHeight - 10){
    itemY = 0;
    goodOrBad = chooseGood();
    itemX = random(0, windowWidth);
  }
  else if(itemY > windowHeight - 150 && itemY < windowHeight + 50 && itemX < mouseX + 50 && itemY > mouseX - 50){
    if(goodOrBad == true){
      score = score + 1;
    }
    else{
      score = score - 1;
    }
    itemY = 0;
    goodOrBad = chooseGood();
    itemX = random(0, windowWidth);
  }
}

function chooseGood(){
  var gOrB = random(0,2);
  if (gOrB == 0){
    return true;
  }
  else{
    return false;
  }
}
