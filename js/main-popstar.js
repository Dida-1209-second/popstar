var WIDTH=500;
var HEIGHT=500;
var isgameover=false;

window.onload=function(){
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext('2d');
	canvas.width=WIDTH;
	canvas.height=HEIGHT;
	
	init(context);
}

function init(cxt){
	star=new starObj();
	star.init();
	star.draw(cxt);
	star.drawStar(cxt);
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
	if(!gameover()){
		
	}
}
