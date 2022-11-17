canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 50;

roverImage ="rover.png"
roverX= 10;
roverY = 10;

var backgroundImage ="mars.jpg"
function add(){
backgroundImgTag = new Image();

 backgroundImgTag.onload = uploadBackGroud;
 backgroundImgTag.src = backgroundImage;

 roverImgTag = new Image();
 roverImgTag.onload = uploadRover;
 roverImgTag.src = roverImage;
}

function uploadBackGroud(){
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight)
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
tecla = e.keyCode;
console.log(tecla);

if(tecla == "38"){
	up();
	console.log("up");
}

if(tecla == "40"){
	down();
	console.log("down");
}

if(tecla == "37"){
	left();
	console.log("left");
}

if(tecla == "39"){
	right();
	console.log("right");
}
}

function up(){
	if(roverY > 0){
		roverY = roverY - 10;


	}
}

function up()
{
    if(roverY >=0){
		roverY = roverY - 10;
		
		uploadBackGroud();
		uploadRover();
	}
}

function down()
{
    if(roverY < 550	){
		roverY = roverY + 10 ;
		
		uploadBackGroud();
		uploadRover();
	}
}
function left()
{
    if(roverY < 550	){
		roverX = roverX - 10 ;
		
		uploadBackGroud();
		uploadRover();
	}
}
function right()
{
    if(roverY < 700	){
		roverX = roverX + 10 ;
		
		uploadBackGroud();
		uploadRover();
	}
}