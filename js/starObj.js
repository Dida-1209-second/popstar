var starObj=function(){
	this.color=[];
	this.depth=[];
	this.x=[];
	this.y=[];
	this.a=[];
	this.vx=[]
	this.vy=[];
}
starObj.prototype.init=function(n,j){
	this.x[i]=n*50;
	this.y[i]=j*50;
	this.color[i]=colors[Math.floor(Math.random()*colors.length)];
}
starObj.prototype.draw=function(cxt){
	cxt.fillStyle=this.color[i];
	cxt.beginPath();
	
	cxt.closePath();
	cxt.fill();
}
