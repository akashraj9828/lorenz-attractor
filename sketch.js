"use strict";

var x = 1;
var y = 1;
var z = 1;
var a = 25.9;//17.4  //default=10
var b = 41;//47.9   //default=28
var c = 7.8;//5.6 //default=8/3
var dx = 1;
var dy = 1;
var dz = 1;
var dt = 0.01;
var re;
var gr;
var bl;
var scl = 10;
var px = [];
var py = [];
var pz = [];
var i = 0;

var getX;
var getY;
var getZ;
var rana;
var ranb;
var ranc;

var scale_slider;


function setup() {
	createCanvas(windowWidth, windowHeight - 100);//,WEBGL);


	background(51);

	// var getX = prompt("Enter value for sigma:range(0,30)", 10);
	// var getY = prompt("Enter value for rho:range(0,99)", 28);
	// var getZ = prompt("Enter value for beta:range(0,29)", 2.6666);
	// a= parseFloat(getX);
	// b= parseFloat(getY);
	// c= parseFloat(getZ);
	console.log("a:" + a);
	console.log("b:" + b);
	console.log("c:" + c);
	//var z = prompt("Enter value for Z:range(-40,40)", "1.9");
	re = random(0, 255);
	gr = random(0, 255);
	bl = random(0, 255);
	scale_slider = createSlider(0.01, 10, 1, 0.01);
	scale_slider.changed(bg);

	setInterval(function () { document.getElementById("info").innerHTML = "sigma:" + a + "\b\brho:" + b + "\b\bbeta:" + c}, 1000);
}


function bg() {
	background(51);



}
function setPoints() {

	dx = (a * (y - x)) * dt;
	dy = (x * (b - z) - y) * dt;
	dz = ((x * y) - (c * z)) * dt;
	x += dx;
	y += dy;
	z += dz;
}




function lines() {
	var ranr;
	
	px[i] = x;
	py[i] = y;
	
	colorMode(HSB);
	

	colorMode(HSB);
	

	for(var j=0;j<i;j+=1){
		push();
		stroke(j/2%255, 255, 100);
		strokeWeight(2/scl);
		
	beginShape();
	
	 vertex(px[j - 1], py[j - 1]);
	 vertex(px[j], py[j]);
	endShape();
	pop();
	
	
	}
	i++;
	
}



function draw() {
	background(51);
	scl = scale_slider.value();
	scale(scl);

	translate(width / 2 / scl, height / 2 / scl);
	setPoints();
	lines();
	

}
	







