var starObj=function(){
	this.color;
	this.depth;
	this.x;
	this.y;
	this.a;
	this.vy;
}
starObj.prototype.init=function(i,j){
	this.x=i*50;
	this.y=j*50;
}
starObj.prototype.draw=function(){
	
}
