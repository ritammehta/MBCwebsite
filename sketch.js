var stars = [];
var dock11;
var arcade;
var titleTimevar = 0;
var fontpoint = 12;
var fontyfonty = 150;
var greenFill = 1;
var openText = "MBC PRESENTS:"
var gameName = "IMPROV QUEST"
var startGame;
var choosePlayer = 0;
var playerChosen;

function preload(){
  dock11 = loadFont('assets/heavy_dock11.otf');
  arcade = loadFont('assets/ARCADECLASSIC.ttf')
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
    background('black')
    starDraw();
    pacMan(mouseX,mouseY);
  }

}

function pacMan(xPos, yPos){
	fill('yellow');
	ellipse(xPos,yPos,50,50)
	fill('black');
	triangle(xPos,yPos,xPos+30,yPos+15,xPos+30,yPos-15);
}

function starDraw(){
	fill('white')
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
  if(mouseX < (windowWidth/2 + windowWidth/6) && mouseX > (windowWidth/2 - windowWidth /6)
  && mouseY > (windowHeight/2 + windowHeight / 6 - windowHeight/30) && mouseY < (windowHeight/2 + windowHeight / 6 + windowHeight/30)){
    begin();
  }
}



function begin(){
  titleTimevar = 2;
}

function choosePlayer(){
  starDraw();

}
