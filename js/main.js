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

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;
var wave;
var helo;

var dust;
var dustPic=[];

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

	ctx1.font='30px Verdana';
	ctx1.textAlign='center'

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
	//小鱼尾巴
	for (var i = 0; i < 8; i++) {
		babyTail[i]=new Image();
		babyTail[i].src='./src/babyTail'+i+'.png';
	}
	//小鱼眼睛
	for (var i = 0; i < 2; i++) {
		babyEye[i]=new Image();
		babyEye[i].src='./src/babyEye'+i+'.png';
	}
	//小鱼身体
	for (var i = 0; i < 20; i++) {
		babyBody[i]=new Image();
		babyBody[i].src='./src/babyFade'+i+'.png';
	}

	//大鱼尾巴
	for (var i = 0; i < 8; i++) {
		momTail[i]=new Image();
		momTail[i].src='./src/bigTail'+i+'.png';
	}

	for (var i = 0; i < 2; i++) {
		momEye[i]=new Image();
		momEye[i].src='./src/bigEye'+i+'.png';
	}

	//大鱼身体
	for (var i = 0; i < 8; i++) {
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();

		momBodyOra[i].src='./src/bigSwim'+i+'.png';
		momBodyBlue[i].src='./src/bigSwimBlue'+i+'.png';
	}
	//dust
	for (var i = 0; i < 7; i++) {
		dustPic[i]=new Image();
		dustPic[i].src='./src/dust'+i+'.png';
	}

	data=new dataObj();

	wave=new waveObj();
	wave.init();

	helo=new heloObj();
	helo.init();

	dust=new dustObj();
	dust.init();
	
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
	baby.draw();
	momFruitCollision();
	momBabyCollision();

	data.draw();
	wave.draw();
	helo.draw();
	dust.draw();
}

function onmousemove(e) {
	if (!data.gameOver) {
		if (e.offSetX||e.layerX) {
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;

		}
	}
	
}


