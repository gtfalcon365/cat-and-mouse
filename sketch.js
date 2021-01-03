var bg,tom,tomI1,tomI2,tomI3,jerry,jerryI1,jerryI2;
function preload() {
bg=loadImage("images/garden.png");
tomI1=loadAnimation("images/tomOne.png")
tomI2=loadAnimation("images/tomTwo.png","images/tomThree.png")
tomI3=loadAnimation("images/tomFour.png")
jerryI1=loadAnimation("images/jerryOne.png")
jerryI2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerryI3=loadAnimation("images/jerryFour.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600)
    tom.addAnimation("tomSleeping", tomI1);
    tom.scale = 0.2


    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryI1);
    jerry.scale = 0.15;

}



function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomI3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryI3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  


    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomI2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryI2);
     
        jerry.changeAnimation("jerryTeasing");
    }



  //For moving and changing animation write code here


}
