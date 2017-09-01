

var x=1;
var y=1;
var z=1;
var a=25.9;//17.4  //default=10
var b=41;//47.9   //default=28
var c=7.8;//5.6 //default=8/3
var dx=1;
var dy=1;
var dz=1;
var dt=0.01;
var re;
var gr;
var bl;
var scl=10;
var px=[];
var py=[];
var pz=[];
var i=0;

var getX;
var getY;
var getZ;
var rana;
var ranb;
var ranc;


function setup() {
	createCanvas(windowWidth, windowHeight-200);//,WEBGL);

	
	background(255);
	
var getX = prompt("Enter value for sigma:range(0,30)", 10);
var getY = prompt("Enter value for rho:range(0,99)", 28);
var getZ = prompt("Enter value for beta:range(0,29)", 2.6666);
a= parseFloat(getX);
b= parseFloat(getY);
c= parseFloat(getZ);
console.log("a:"+a);
console.log("b:"+b);
console.log("c:"+c);
//var z = prompt("Enter value for Z:range(-40,40)", "1.9");
	 re=random(0,255);
gr=random(0,255);
 bl=random(0,255);
	
	setInterval(function(){document.getElementById("fps").innerHTML="FPS:"+frameRate()},1000);
	setInterval(function(){document.getElementById("info").innerHTML="sigma:"+a+"\b\brho:"+b+"\b\bbeta:"+c+"\b\bx:"+x+"\b\by:"+y+"\b\bz:"+z},1000);
}


function setColour(){

	

}
function setPoints(){

	dx=(a*(y-x))*dt;
	dy=(x*(b-z)-y)*dt;
	dz=((x*y)-(c*z))*dt;
	x+=dx;
	y+=dy;
	z+=dz;	
}




function lines(){
    px[i]=x;
    py[i]=y;
    pz[i]=z;
colorMode(HSB);
    ranr=random(0,0.2);
  rang=random(0,0.6);
   ranb=random(0,0.4);

    re+=ranr;
	gr+=rang;
	bl+=ranb;


   stroke(re, 255, 255);
strokeWeight(5/scl);

   
beginShape();
	vertex(px[i-1],py[i-1]);
	vertex(px[i],py[i]);
endShape();
i++;
 }


function draw() {
	scale(scl);

	translate(width/2/scl,height/2/scl);
setPoints();
	lines();

if(gr>255){
	gr=0;
}
if(bl>255){
	
	bl=0;
}
if(re>255){
	re=0;
	
}

	

 



}