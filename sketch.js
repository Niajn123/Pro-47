var welcomeScreenImg, buttonImg, Start;
var gameState = 0;
var ScramblerImg;
var Shuffler, ShufflerImg;
var SCtile1, SCtile2, SCtile3, SCtile4, SCtile5, SCtile6, SCtile7, SCtile8, SCtile9;
var SCtiles = []

function preload(){
	welcomeScreenImg = loadImage("Racing Flag.png")
	buttonImg = loadImage("Start.png")
	ScramblerImg = loadImage("Scrambler1.png")
	ShufflerImg = loadImage("Shuffler.png")
}

function setup() {
	createCanvas(800, 700);  

	Start = createSprite(width/2, height/2)
	Start.addImage(buttonImg)
	Start.scale = 0.1 

	Scrambler = createSprite(600,150)
	Scrambler.addImage(ScramblerImg)
	Scrambler.scale = 3
	Scrambler.visible = false 

	Shuffler = createSprite(360,100)
	Shuffler.addImage(ShufflerImg)
	Shuffler.scale = 0.2
	Shuffler.visible = false
	scrambler()


}


function draw() {  
	if(gameState == 0){
		background(welcomeScreenImg)
	if(mousePressedOver(Start)){
		gameState = 1
		Start.visible = false 
	}
}
	if(gameState == 1){
		background("white")
		Shuffler.visible = true 
		Scrambler.visible = true

		if(mousePressedOver(Shuffler)){
			shuffleScrambler()
		}
	}

  drawSprites();
 
}

function scrambler(){
	//First Row
	SCtile1 = createSprite(Scrambler.x - 80,140,62,56)
	SCtile1.shapeColor = "red"
	SCtile2 = createSprite(Scrambler.x - 18,140,62,56)
	SCtile2.shapeColor = "blue"
	SCtile3 = createSprite(Scrambler.x + 45,140,62,56)
	SCtile3.shapeColor = "yellow"

	//Second Row
	SCtile4 = createSprite(Scrambler.x - 80,188,62,56)
	SCtile4.shapeColor = "green"
	SCtile5 = createSprite(Scrambler.x - 18,188,62,56)
	SCtile5.shapeColor = "yellow"
	SCtile6 = createSprite(Scrambler.x + 45,188,62,56)
	SCtile6.shapeColor = "red"

	//Third Row
	SCtile7 = createSprite(Scrambler.x - 80,244,62,56)
	SCtile7.shapeColor = "yellow"
	SCtile8 = createSprite(Scrambler.x - 18,244,62,56)
	SCtile8.shapeColor = "green"
	SCtile9 = createSprite(Scrambler.x + 45,244,62,56)
	SCtile9.shapeColor = "blue"
	
	SCtiles = [SCtile1, SCtile2, SCtile3, SCtile4, SCtile5, SCtile6, SCtile7, SCtile8, SCtile9]


}



