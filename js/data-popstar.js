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
this.arcTo(x, y, x+w, y, r);
// this.arcTo(x+r, y);
this.closePath();
return this;
}