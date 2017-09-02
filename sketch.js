"use strict";

var x = 1;		//inital x coordinate
var y = 1;		//initial y coordinate
var z = 1;		//initial z ccordinate (z coordinate is not dispayed because we are rendering in 2D mode) for 3D version check > https://github.com/akashraj9828/lorrentz-attracctor-3D-JAVASCRIPT
var sigma = 25.9;		//17.4  //default=10   //sigma	
var rho = 41;			//47.9   //default=28	//rho	
var beta = 7.8;			//5.6 //default=8/3		//beta
var dx;
var dy;
var dz;
var dt = 0.01;		//time frame
var scl;			//scaling factor
var px = [];		//array of postion of all x coordinates
var py = [];		//array of positon of all y coordinates
var pz = [];		//array of positon of all z coordinates
var i = 0;

var getSigma;		//var to store user inputted sigma
var getRho;			//var to store user inputted rho
var getBeta;		//var to store user inputted beta

var getX;			//var to store user inputted inital x
var getY;			//var to store user inputted inital y
var getZ;			//var to store user inputted inital z
var get_dT;			//var to store user inputted inital dt (time frame)

var debugging=true;		//set true when testing
var set_x_y_z=false;	//set true if want user input of inital x,y,z
var shape_closed=true;	//set false if want to see orignal lorenz attractor


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




function render_line() {
	var ranr;

	px[i] = x;
	py[i] = y;

	colorMode(HSB);


	for (var j = 0; j < i; j +=10) {
		push();


		stroke((i-j)/8% 255, 255, 100);
		strokeWeight(2 / scl);
		noFill();
		beginShape();

		vertex(px[j], py[j]);
		vertex(px[j+1], py[j+1]);
		vertex(px[j+2], py[j+2]);
		vertex(px[j+3], py[j+3]);
		vertex(px[j+4], py[j+4]);
		vertex(px[j+5], py[j+5]);
		vertex(px[j+6], py[j+6]);
		vertex(px[j+7], py[j+7]);
		vertex(px[j+8], py[j+8]);
		vertex(px[j+9], py[j+9]);
		vertex(px[j+10], py[j+10]);
		vertex(px[j+11], py[j+11]);

		if(shape_closed)
		endShape(CLOSE);
		else
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
	scale(scl);				// to zoom in or zoom out in canvas

	translate(width / 2 / scl, height / 2 / scl); 		//translates from (0,0)[top-left corner] to (width/2,height/2)[center of canvas]
	setPoints();
	render_line();

	
	
	


}








