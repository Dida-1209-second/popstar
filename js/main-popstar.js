var WIDTH=500;
var HEIGHT=500;

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
	star.drawStar(cxt);
}
