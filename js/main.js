var can1;//fish,dust,UI,circle
var can2;//bg,ane,fruits,
var ctx1;
var ctx2;

var bgPic=new Image();
var ane;
var fruit;

var mom;
var mx;
var my;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;
document.body.onload=game;

function game(){
	init();
	lastTime=Date.now();
	gameloop();
}

function init(){
	can1=document.getElementById('canvas1');
	//fish,dust,UI,circle
	can2=document.getElementById('canvas2');
	//bg,ane,fruits,
	ctx1=can1.getContext('2d');
	ctx2=can2.getContext('2d');

	canWidth=can1.width;
	canHeight=can1.height;

	can1.addEventListener('mousemove',onmousemove,false);

	bgPic.src='./src/background.jpg';

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;

	baby=new babyObj();
	baby.init();
}
function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	if (deltaTime>40) {
		deltaTime=40;
	}
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitCollision();
	baby.draw();
}

function onmousemove(e) {
	if (e.offSetX||e.layerX) {
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;

	}
}


