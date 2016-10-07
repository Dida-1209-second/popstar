var WIDTH = 500;
var HEIGHT = 500;
var isgameover = false;
var mx;
var my;
var star;
var arr; 
var cxt;//存储点击位置上下左右颜色相同的星星

window.onload = function() {
	var canvas = document.getElementById("canvas");
	cxt = canvas.getContext('2d');
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	canvas.addEventListener('click', onMouseClick, false);
	init(cxt);
}

function init(cxt) {
	//画星星和圆角矩形
	console.log(data.length);
	for(var i = 0; i < data.length; i++) {
		for(var j = 0; j < data[i].length; j++) {
			star = new starObj();
			star.init(i, j);
			star.draw(cxt);
			star.drawStar(cxt);
			data[i][j] = star;
		}
	}

	//鼠标点击事件

}

function newgame() {

}

function gameover() {
	if(isgameover) {
		alert("gameover");
	} else
		return false;
}

function Collision(i, j) {
	arr = [];
	arr.push({
		i: Math.floor(i / 50),
		j: Math.floor(j / 50)
	});
	var i = 0;
	//Arr.push({i:Math.floor(i/50),j:Math.floor(j/50)});
	do {
		var obj = arr[i];
		//			console.log(arr.length);
		x = obj.i;
		y = obj.j;
		//			console.log(x,y);
		arr = checkDouble(arr, checkLeft(x, y));
		//			debugger
		arr = checkDouble(arr, checkRight(x, y));
		//			debugger
		arr = checkDouble(arr, checkUp(x, y));
		//			debugger
		arr = checkDouble(arr, checkDown(x, y));
		//							debugger
		//							for(var j=0;j<arr.length;j++)
		//							console.log(arr[j]);
		i++;

	} while (i < arr.length);

	/*星星消失*/
	while(arr.length != 0) {
		var a = arr.pop();
		var flag = true;
		//		console.log(a.i,a.j);
//清除画布上的星星
		if(a.j == 0) {
			starDisappear(cxt,a.i,a.j);//清除画布上的星星
			data[a.i][a.j] = null;
			//			console.log(data[a.i][a.j]);
		} else if(a.j == 9) {
			var j;
			starDisappear(cxt,a.i,a.j);//清除画布上的星星
			data[a.i][a.j] = null;
			
			for(j = 8; j >= 0; j--) {
				if(data[a.i][j] != null) {
					flag = false;
				}
			}
			if(!flag) {
				//				console.log("a.j=9,xia");
				//data垂直向下移动
			} else {
				//				console.log("a.j=9,zuo");
				//data水平向左移动
			}
		} else {
			starDisappear(cxt,a.i,a.j);//清除画布上的星星
			data[a.i][a.j] = null;
		
			//data垂直向下移动
			//			console.log("a.j!=0/9,xia");
		}
		flag = true;
	}
}

function checkDouble(arr, arrX) {
	for(var i = 0; i < arrX.length; i++) {
		var flag = false;
		var x = arrX[i].i;
		var y = arrX[i].j;
		for(var j = 0; j < arr.length; j++) {
			if(arr[j].i == x && arr[j].j == y) {
				flag = true;
			}
		}
		if(!flag) {
			arr.push(arrX[i]);
		}
	}
	return arr;
}

function checkLeft(x, y) {
	var arrL = [];
	for(var n = x - 1; n >= 0; n--) {
		if(!data[n][y]&&data[n][y].color == data[x][y].color) {
			arrL.push({
				i: n,
				j: y
			});
		} else break;
	}
	return arrL;
}

function checkRight(x, y) {
	var arrR = [];
	for(var n = x + 1; n < 10; n++) {
		if(data[n][y].color!='null'&&data[n][y].color == data[x][y].color) {
			arrR.push({
				i: n,
				j: y
			});
		} else break;
	}
	return arrR;
}

function checkUp(x, y) {
	var arrU = [];
	for(var n = y - 1; n >= 0; n--) {
		if(!data[x][n].color&&data[x][n].color == data[x][y].color) {
			arrU.push({
				i: x,
				j: n
			});
		} else break;
	}
	return arrU;
}

function checkDown(x, y) {
	var arrD = [];
	for(var n = y + 1; n < 10; n++) {
		if(typeof data[x][n].color!='null'&& data[x][n].color == data[x][y].color) {
			arrD.push({
				i: x,
				j: n
			});
		} else break;
	}
	return arrD;
}

function onMouseClick(e) {
	if(!gameover()) {
		if(e.offsetX || e.layerX) {
			mx = e.offsetX == undefined ? e.layerX : e.offsetX;
			my = e.offsetY == undefined ? e.layerY : e.offsetY;
			Collision(mx, my);
		}
	}
}