var WIDTH=500;
var HEIGHT=500;
var isgameover=false;
var mx;
var my;
var star;

window.onload=function(){
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext('2d');
	canvas.width=WIDTH;
	canvas.height=HEIGHT;
	
	canvas.addEventListener('click',onMouseClick,false);
	init(context);
}

function init(cxt){
	//画星星和圆角矩形
	star=new starObj();
	
	star.init();
	star.draw(cxt);
	star.drawStar(cxt);
	//鼠标点击事件
	
}

function newgame(){
	
}

function gameover(){
	if(isgameover){
		alert("gameover");
	}
	else 
	return false;
}

function Collision(){
	var arrayi=[];
	var arrayj=[];
		arrayi.push(Math.floor(mx/50));
		arrayj.push(Math.floor(my/50));
		Horizontal(arrayi,arrayj);

}

function Horizontal(arri,arrj){
	var arr=[];
	var i
	while(!arri){
		i=arri.pop();
		
		for(var j=0;)
	}
}

function onMouseClick(e){
	if(!gameover()){
		if(e.offsetX||e.layerX){
			mx=e.offsetX==undefined?e.layerX : e.offsetX;
			my=e.offsetY==undefined?e.layerY : e.offsetY;
		}
	}
}
