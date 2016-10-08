//清除画布上的星星
function starDisappear(cxt,i,j){
	var x=data[i][j].x;
	var y=data[i][j].y;
	cxt.clearRect(x,y,50,50);
}
function verticalDown(i,j){
	while(i<9){
		data[i+1][j]=data[i][j];
		data[i][j]=null;
		data[i+1][j].draw(cxt);
		i+=1;
	}
}
function horizontalLeft(i,j){
	
}
