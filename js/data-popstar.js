data=
[
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]

];
colors=["#de3a3a","#faf707","#07a7fa","#07fa57","#e007fa"];

//function drawRoundRec(x,y,w,h){
//	
//}
//圆角矩形
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
if (w < 2 * r) r = w / 2;
if (h < 2 * r) r = h / 2;
this.beginPath();
this.moveTo(x+r, y);
this.arcTo(x+w, y, x+w, y+h, r);
this.arcTo(x+w, y+h, x, y+h, r);
this.arcTo(x, y+h, x, y, r);
//this.arcTo(x, y, x+w, y, r);
// this.arcTo(x+r, y);
this.closePath();
return this;
}

CanvasRenderingContext2D.prototype.star=function(R,r,x,y){
	this.beginPath();
	for(var j=0;j<5;j++){
		this.lineTo(Math.cos((18+j*72)/180*Math.PI)*R+x,
           		    -Math.sin((18+j*72)/180*Math.PI)*R+y);   
       	this.lineTo(Math.cos((54+j*72)/180*Math.PI)*r+x,   
                    -Math.sin((54+j*72)/180*Math.PI)*r+y);   
	}
	this.closePath();
	return this;
}


