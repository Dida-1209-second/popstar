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

function Collision(i,j){
	var arr=[];
	var Arr=[];
	arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
	Arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
		console.log(arr.length);
		while(arr.length!=0){
			var obj=arr.pop();
			console.log(arr.length);
			var x=obj.i;
			var y=obj.j;
			console.log(x,y);
			arr.push(checkLeft(x,y));
			arr.push(checkRight(x,y));
			arr.push(checkUp(x,y));
			arr.push(checkDown(x,y));
			Arr.push(arr);
			for(var i=0;i<Arr.length;i++)
			console.log(Arr[i]);
			
		}
		//Horizontal(arrayi,arrayj);

}

function checkLeft(i,j){
	var arrL=[];
	for(var n=i-1;n>=0;n--){
		//if(data[n][j].color==data[i][j].color){
			arrL.push({i:n,j:j});
		//}
	}
	return arrL;
}

function checkRight(i,j){
	var arrR=[];
	for(var n=i+1;n<10;n++){
		//if(data[n][j].color==data[i][j].color){
			arrR.push({i:n,j:j});
		//}
	}
	return arrR;
}

function checkUp(i,j){
	var arrU=[];
	for(var n=j-1;n>=0;n--){
		//if(data[n][j].color==data[i][j].color){
			arrU.push({i:n,j:j});
		//}
	}
	return arrU;
}

function checkDown(i,j){
	var arrD=[];
	for(var n=j+1;n<10;n++){
		//if(data[n][j].color==data[i][j].color){
			arrD.push({i:n,j:j});
		//}
	}
	return arrD;
}
//function Horizontal(arri,arrj){
//	var arr=[];
//	var i=
//	while(!arri){
//		i=arri.pop();
//		for(var j=0;j<10;j++){
//			for(var n=)
//		}
//	}
//}

function onMouseClick(e){
	if(!gameover()){
		if(e.offsetX||e.layerX){
			mx=e.offsetX==undefined?e.layerX : e.offsetX;
			my=e.offsetY==undefined?e.layerY : e.offsetY;
			Collision(mx,my);
		}
	}
}
