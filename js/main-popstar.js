var WIDTH=500;
var HEIGHT=500;
var isgameover=false;
var mx;
var my;
var star;
var arr;
var Arr;

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
	Arr=[];
	arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
	Arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
		console.log(arr.length);
		while(arr.length!=0){
			var obj=arr.pop();
			console.log(arr.length);
			x=obj.i;
			y=obj.j;
			console.log(x,y);
			arr=arr.concat(checkLeft(x,y));
			arr=arr.concat(checkRight(x,y));
			arr=arr.concat(checkUp(x,y));
			arr=arr.concat(checkDown(x,y));
			
			Arr=checkDouble(Arr,arr);
			for(var i=0;i<Arr.length;i++)
			console.log(Arr[i]);
			
		}
		//Horizontal(arrayi,arrayj);

}

function checkDouble(Arr,arr){
	var flag=false;
	for(var i=0;i<arr.length;i++){
		var x=arr[i].i;
		var y=arr[i].j;
		for(var j=0;j<Arr.length;j++){
			if(Arr[j].i==x&&Arr[j].j==y)
				flag=true;
		}
		if(!flag){
			Arr.push(arr[i]);
		}
	}
	return Arr; 
}

function checkLeft(x,y){
	var arrL=[];
	for(var n=x-1;n>=0;n--){
		//if(data[n][j].color==data[i][j].color){
			arrL.push({i:n,j:y});
		//}
	}
	return arrL;
}

function checkRight(x,y){
	var arrR=[];
	for(var n=x+1;n<10;n++){
		//if(data[n][j].color==data[i][j].color){
			arrR.push({i:n,j:y});
		//}
	}
	return arrR;
}

function checkUp(x,y){
	var arrU=[];
	for(var n=y-1;n>=0;n--){
		//if(data[n][j].color==data[i][j].color){
			arrU.push({i:x,j:n});
		//}
	}
	return arrU;
}

function checkDown(x,y){
	var arrD=[];
	for(var n=y+1;n<10;n++){
		//if(data[n][j].color==data[i][j].color){
			arrD.push({i:x,j:y});
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
