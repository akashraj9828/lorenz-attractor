"use strict";

var x = 1;		
var y = 1;		
var z = 1;
var sigma = 25.9;//17.4  //default=10   //sigma	
var rho = 41;//47.9   //default=28	//rho	
var beta = 7.8;//5.6 //default=8/3		//beta
var dx;
var dy;
var dz;
var dt = 0.01;
var scl;
var px = [];
var py = [];
var pz = [];
var i = 0;

var getSigma;
var getRho;
var getBeta;

var getX;
var getY;
var getZ;
var get_dT;

var debugging=true;
var set_x_y_z=false;


var scale_slider;


function setup() {
	createCanvas(windowWidth, windowHeight - 100);


	background(51);

	if(!debugging){
	getSigma = prompt("Enter value for sigma:range(0,30)", 10);
	getRho = prompt("Enter value for rho:range(0,99)", 28);
	getBeta = prompt("Enter value for beta:range(0,29)", 2.6666);
	sigma= parseFloat(getSigma);
	rho= parseFloat(getRho);
	beta= parseFloat(getBeta);
	if(set_x_y_z){
		getX = prompt("Enter value for X:range(0,20)", 1);
		getY = prompt("Enter value for Y:range(0,29)", 1);
		getZ = prompt("Enter value for Z:range(0,20)",1);
		get_dT = prompt("Enter value for dT:range(0.01,0.2)", 0.01);
		x= parseFloat(getX);
		y= parseFloat(getY);
		z= parseFloat(getZ);
		dt=parseFloat(get_dT);

	}
	}
	console.log("sigma:" + sigma);
	console.log("rho:" + rho);
	console.log("beta:" + beta);
	

	scale_slider = createSlider(0.1, 15, 5, 0.01);
	scale_slider.position(100,100)	
}


function bg() {
	background(51);
}


function setPoints() {

	dx = (sigma * (y - x)) * dt;
	dy = (x * (rho - z) - y) * dt;
	dz = ((x * y) - (beta * z)) * dt;
	x += dx;
	y += dy;
	z += dz;
}




function lines() {
	var ranr;

	px[i] = x;
	py[i] = y;

	colorMode(HSB);


	for (var j = 0; j < i; j += 1) {
		push();


		stroke(j / 2 % 255, 255, 100);
		strokeWeight(2 / scl);
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
	text('SCALE',50,37)
	text(scl+'x',250,37)
	scale(scl);
	translate(width / 2 / scl, height / 2 / scl);
	setPoints();
	lines();

	
	
	


}








