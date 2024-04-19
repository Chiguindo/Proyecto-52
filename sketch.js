var soldado,soldadoImg,soldadoGroup;
var slime, slimeImg, slimeGroup;
var heroe, heroeImg;
var poder = 100  

function preload(){
  
 soldadoImg = loadAnimation ("Personajes jugables/soldado_0.png","Personajes jugables/soldado_1.png","Personajes jugables/soldado_2.png","Personajes jugables/soldado_3.png","Personajes jugables/soldado_4.png","Personajes jugables/soldado_5.png","Personajes jugables/soldado_6.png","Personajes jugables/soldado_7.png","Personajes jugables/soldado_8.png")
 slimeImg = loadAnimation ("Personajes jugables/Slime0.png","Personajes jugables/Slime1.png","Personajes jugables/Slime2.png")
 heroeImg = loadAnimation ("Personajes jugables/heroe0.png","Personajes jugables/heroe1.png","Personajes jugables/heroe3.png","Personajes jugables/heroe4.png","Personajes jugables/heroe5.png" )

}

function setup() {

  
createCanvas(windowWidth,windowHeight);

heroe = createSprite(displayWidth-1150, displayHeight-300,50,50);
heroe.addAnimation ( "running", heroeImg);
heroe.scale = 5.5;

  

slimeGroup = new Group ();
soldadoGroup = new Group();
}

function draw() {
  background(0); 


  if (keyDown("UP_ARROW")){

    heroe.y = heroe.y-20;

  }

  if (keyDown("DOWN_ARROW")){

    heroe.y = heroe.y+20;
  
    }

    if (keyWentDown("SPACE")){

      poder = createSprite (displayWidth-1150, heroe.y-50, 20,10 );
      poder.velocityX = 5;
      
      }

enemy();
drawSprites();

}

function enemy (){

if (frameCount %50 == 0){

  soldado = createSprite (random(1100,1500),random(100,500),40,40);
  soldado.addAnimation("running", soldadoImg);
  soldado.scale = +4;
  soldado.velocityX = -3;
  soldado.lifetime = 500;
  soldadoGroup.add(soldado);
}

if(frameCount %70 == 0){

  slime = createSprite (random(1100,1500),random(100,500),40,40);
  slime.addAnimation("running", slimeImg);
  slime.scale = 1.5;
  slime.velocityX = -2;
  slime.lifetime = 700;
  slimeGroup.add(slime);
}




} 















 

