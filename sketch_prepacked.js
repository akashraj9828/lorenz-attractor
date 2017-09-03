var setup, bg, setPoints, render_line, draw, scale_slider, shape_closed, set_x_y_z, debugging, get_dT, getZ, getY, getX, getBeta, getRho, getSigma, i, pz, py, px, scl, dt, dz, dy, dx, beta, rho, sigma, z, y, x;
(function () {
  "use strict";

  var _$0 = this;

  function _0() {
    //setup function loads once only when webpage loads
    createCanvas(windowWidth, windowHeight - 100);
    background(51); //sets background to gray 

    if (!_$0.debugging) {
      //when not debugging takes input (sigma,rho,beta) from user
      _$0.getSigma = prompt("Enter value for sigma:range(0,30)", 10);
      _$0.getRho = prompt("Enter value for rho:range(0,99)", 28);
      _$0.getBeta = prompt("Enter value for beta:range(0,29)", 2.6666);
      _$0.sigma = _$0.parseFloat(_$0.getSigma);
      _$0.rho = _$0.parseFloat(_$0.getRho);
      _$0.beta = _$0.parseFloat(_$0.getBeta);

      if (_$0.set_x_y_z) {
        ////takes inital coordinate input(x,y,z) from user
        _$0.getX = prompt("Enter value for X:range(0,20)", 1);
        _$0.getY = prompt("Enter value for Y:range(0,29)", 1);
        _$0.getZ = prompt("Enter value for Z:range(0,20)", 1);
        _$0.get_dT = prompt("Enter value for dT:range(0.01,0.2)", 0.01);
        _$0.x = _$0.parseFloat(_$0.getX);
        _$0.y = _$0.parseFloat(_$0.getY);
        _$0.z = _$0.parseFloat(_$0.getZ);
        _$0.dt = _$0.parseFloat(_$0.get_dT);
      }
    }

    _$0.console.log("sigma:" + _$0.sigma); //you can see values of system varibles in console


    _$0.console.log("rho:" + _$0.rho);

    _$0.console.log("beta:" + _$0.beta);

    _$0.scale_slider = createSlider(0.1, 15, 5, 0.01); //creating slider

    _$0.scale_slider.position(100, 100);
  }

  function _1() {
    background(51);
  }

  function _2() {
    //function to decide next (x,y,z) based on current (x,y,z)
    _$0.dx = _$0.sigma * (_$0.y - _$0.x) * _$0.dt;
    _$0.dy = (_$0.x * (_$0.rho - _$0.z) - _$0.y) * _$0.dt;
    _$0.dz = (_$0.x * _$0.y - _$0.beta * _$0.z) * _$0.dt;
    _$0.x += _$0.dx;
    _$0.y += _$0.dy;
    _$0.z += _$0.dz;
  }

  function _3() {
    //function to draw line b/w all coordinates
    _$0.px[_$0.i] = _$0.x;
    _$0.py[_$0.i] = _$0.y;
    colorMode(HSB);

    for (var j = 0; j < _$0.i; j += 10) {
      stroke((_$0.i - j) / 8 % 255, 255, 100);
      strokeWeight(2 / _$0.scl);
      noFill();
      beginShape(); //begins drawing of shape

      vertex(_$0.px[j], _$0.py[j]); //set vertices

      vertex(_$0.px[j + 1], _$0.py[j + 1]);
      vertex(_$0.px[j + 2], _$0.py[j + 2]);
      vertex(_$0.px[j + 3], _$0.py[j + 3]);
      vertex(_$0.px[j + 4], _$0.py[j + 4]);
      vertex(_$0.px[j + 5], _$0.py[j + 5]);
      vertex(_$0.px[j + 6], _$0.py[j + 6]);
      vertex(_$0.px[j + 7], _$0.py[j + 7]);
      vertex(_$0.px[j + 8], _$0.py[j + 8]);
      vertex(_$0.px[j + 9], _$0.py[j + 9]);
      vertex(_$0.px[j + 10], _$0.py[j + 10]);
      vertex(_$0.px[j + 11], _$0.py[j + 11]);
      if (_$0.shape_closed) endShape(CLOSE); // **EXPERIMENTAL joins each 10th point to 1st point
      else endShape(); //end of drawing shape
    }

    _$0.i++; //increments index of location array px[],py[],pz[]
  }

  function _4() {
    //draw function gets called repeatedly to create amination
    background(51); //gray background

    _$0.scl = _$0.scale_slider.value(); //sets scaling factor = slider value

    text('SCALE', 50, 37);
    text(_$0.scl + 'x', 250, 37);
    scale(_$0.scl); // to zoom in or zoom out in canvas

    translate(width / 2 / _$0.scl, height / 2 / _$0.scl); //translates from (0,0)[top-left corner] to (width/2,height/2)[center of canvas]

    _$0.setPoints(); //calculate next point


    _$0.render_line(); //draw line

  }

  setup = _0;
  bg = _1;
  setPoints = _2;
  render_line = _3;
  draw = _4;
  scale_slider = void 0;
  shape_closed = void 0;
  set_x_y_z = void 0;
  debugging = void 0;
  get_dT = void 0;
  getZ = void 0;
  getY = void 0;
  getX = void 0;
  getBeta = void 0;
  getRho = void 0;
  getSigma = void 0;
  i = void 0;
  pz = void 0;
  py = void 0;
  px = void 0;
  scl = void 0;
  dt = void 0;
  dz = void 0;
  dy = void 0;
  dx = void 0;
  beta = void 0;
  rho = void 0;
  sigma = void 0;
  z = void 0;
  y = void 0;
  x = void 0;
  x = 1;
  y = 1;
  z = 1;
  sigma = 25.9;
  rho = 41;
  beta = 7.8;
  dt = 0.01;
  px = [];
  py = [];
  pz = [];
  i = 0;
  debugging = true;
  set_x_y_z = false;
  shape_closed = true;
}).call(this);