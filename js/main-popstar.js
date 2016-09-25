var WIDTH=500;
var HEIGHT=500;
var isgameover=false;
var mx;
var my;
var star;
var arr;
var arrX;

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
	arr=[];
	arrX=[];
	arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
	var i=0;
	//Arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
		do{
			var obj=arr[i];
			console.log(arr.length);
			x=obj.i;
			y=obj.j;
			console.log(x,y);
			arrX=checkLeft(x,y);
			arr=checkDouble(arr,arrX);
//			debugger
			arrX=checkRight(x,y);
			arr=checkDouble(arr,arrX);
//			debugger
			arrX=checkUp(x,y);
			arr=checkDouble(arr,arrX);
//			debugger
			arrX=checkDown(x,y);
			arr=checkDouble(arr,arrX);
//			debugger
//			Arr=checkDouble(Arr,arr);
			for(var j=0;j<arr.length;j++)
			console.log(arr[j]);
			i++;
			
		}while(i<arr.length);
		//Horizontal(arrayi,arrayj);

}

function checkDouble(arr,arrX){
	for(var i=0;i<arrX.length;i++){
		var flag=false;
		var x=arrX[i].i;
		var y=arrX[i].j;
		for(var j=0;j<arr.length;j++){
			if(arr[j].i==x&&arr[j].j==y){
				flag=true;
			}
		}
		if(!flag){
			arr.push(arrX[i]);
		}
	}
	return arr; 
}

function checkLeft(x,y){
	var arrL=[];
	for(var n=x-1;n>=0;n--){
		//if(data[n][j].color==data[i][j].color){
			arrL.push({i:n,j:y});
		//}else break;
	}
	return arrL;
}

function checkRight(x,y){
	var arrR=[];
	for(var n=x+1;n<10;n++){
		//if(data[n][j].color==data[i][j].color){
			arrR.push({i:n,j:y});
		//}else break;
	}
	return arrR;
}

function checkUp(x,y){
	var arrU=[];
	for(var n=y-1;n>=0;n--){
		//if(data[n][j].color==data[i][j].color){
			arrU.push({i:x,j:n});
		//}else break;
	}
	return arrU;
}

function checkDown(x,y){
	var arrD=[];
	for(var n=y+1;n<10;n++){
		//if(data[n][j].color==data[i][j].color){
			arrD.push({i:x,j:n});
		//}else break;
	}
	return arrD;
}

function onMouseClick(e){
	if(!gameover()){
		if(e.offsetX||e.layerX){
			mx=e.offsetX==undefined?e.layerX : e.offsetX;
			my=e.offsetY==undefined?e.layerY : e.offsetY;
			Collision(mx,my);
		}
	}
}
