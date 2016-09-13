var starObj=function(){
	this.color=[];
	this.depth=[];
	this.x=[];
	this.y=[];
	this.a=[];
	this.vx=[]
	this.vy=[];
}

starObj.prototype.init=function(){
	for(var n=0;n<100;n++){
		for(var i=0;i<10;i++){
			for(var j=0;j<10;j++){
				this.x[n]=i*50;
				this.y[n]=j*50;
				this.color[n]=colors[Math.floor(Math.random()*colors.length)];
			}
		}
	}
}
starObj.prototype.draw=function(cxt){
	for(var i=0;i<100;i++){
		cxt.fillStyle=this.color[i];
		cxt.roundRect(this.x,this.y,40,40,5).fill();
	}
}
