var WIDTH=500;
var HEIGHT=500;

window.onload=function(){
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext('2d');
	canvas.width=WIDTH;
	canvas.height=HEIGHT;
	
	init();
}

function init(){
	for(var i=0;i<10;i++){
		for(var j=0;j<10;j++){
			starObj.init(i,j);
		}
	}
	
}
