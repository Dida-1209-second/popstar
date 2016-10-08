var starObj = function() {
	this.color ;
	this.i;
	this.j;
	this.x ;
	this.y ;
	this.a ;
	this.vx ;
	this.vy ;
}

starObj.prototype.init = function(i,j) {
	this.i= i;
	this.j = j;
	this.y= i * 50;
	//console.log(this.x);
	this.x = j * 50;
	//console.log(this.y);
	this.color = colors[Math.floor(Math.random() * colors.length)];
	//console.log(this.color);
}


//圆角矩形
starObj.prototype.draw = function(cxt) {
	//console.log(this.color[i],this.x[i],this.y[i]);
	cxt.fillStyle = this.color;
	cxt.roundRect(this.x, this.y, 48, 48, 10).fill();
}

starObj.prototype.drawStar = function(cxt) {
	cxt.fillStyle = this.color;
	cxt.starFill(20, 10, this.x + 24, this.y + 24).fill();
	cxt.starStroke(20,10,this.x+24,this.y+24).stroke();
}












