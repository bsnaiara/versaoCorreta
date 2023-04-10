var Stark;
var Arrow;
var StarkAnm, StarkAnmLeft, StarkImg, ArrowAnm;
var limiteInv;
var edges;
var andar1, bg;

function preload() {
  StarkAnm=loadAnimation("assets/P1.png","assets/P2.png","assets/P3.png","assets/P4.png","assets/P5.png","assets/P6.png","assets/P7.png");
  StarkAnm.playing = true;
  StarkAnm.looping = true;
  StarkImg = loadImage("assets/P0.png");
  StarkAnmLeft = loadAnimation("assets/Pleft1.png", "assets/Pleft2.png", "assets/Pleft3.png", "assets/Pleft4.png", "assets/Pleft5.png", "assets/Pleft6.png", "assets/Pleft7.png", "assets/Pleft8.png");
  bg = loadImage("assets/fundo.jpg");
  Arrow = loadAnimation("assets/Arrow.gif")
}




function setup() {
  createCanvas(1000,520);

  Stark = createSprite(500,490,1,1);
  Stark.addAnimation('stark', StarkImg);
  Stark.addAnimation('stark_walking', StarkAnm);
  Stark.addAnimation('stark_left', StarkAnmLeft);
  Stark.changeAnimation('stark');
 // Stark.scale=1.4;

  limiteInv = createSprite(200, 505, 2000, 10);
  limiteInv.visible = false;

  edges = createEdgeSprites();
}

function draw() {
  background(220);
  
  drawSprites();
  
  //Movimentações esquerda e direita do personagem.
  if(keyIsDown(LEFT_ARROW)){
    Stark.x-=10;
    Stark.changeAnimation('stark_left');
  }else if(keyIsDown(RIGHT_ARROW)){
    Stark.x+=10;
    Stark.changeAnimation('stark_walking');
  }else{
    Stark.changeAnimation('stark');
  }

  
  Stark.collide(limiteInv);
  console.log(Stark.y);

 
  
}