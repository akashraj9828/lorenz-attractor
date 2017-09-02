var setup, bg, setPoints, lines, draw, scale_slider, set_x_y_z, debugging, get_dT, getZ, getY, getX, getBeta, getRho, getSigma, i, pz, py, px, scl, dt, dz, dy, dx, beta, rho, sigma, z, y, x;
(function () {
  "use strict";

  var _$0 = this;

  function _0() {
    createCanvas(windowWidth, windowHeight - 100);
    background(51);

    if (!_$0.debugging) {
      _$0.getSigma = prompt("Enter value for sigma:range(0,30)", 10);
      _$0.getRho = prompt("Enter value for rho:range(0,99)", 28);
      _$0.getBeta = prompt("Enter value for beta:range(0,29)", 2.6666);
      _$0.sigma = _$0.parseFloat(_$0.getSigma);
      _$0.rho = _$0.parseFloat(_$0.getRho);
      _$0.beta = _$0.parseFloat(_$0.getBeta);

      if (_$0.set_x_y_z) {
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

    _$0.console.log("sigma:" + _$0.sigma);

    _$0.console.log("rho:" + _$0.rho);

    _$0.console.log("beta:" + _$0.beta);

    _$0.scale_slider = createSlider(0.1, 15, 5, 0.01);

    _$0.scale_slider.position(100, 100);
  }

  function _1() {
    background(51);
  }

  function _2() {
    _$0.dx = _$0.sigma * (_$0.y - _$0.x) * _$0.dt;
    _$0.dy = (_$0.x * (_$0.rho - _$0.z) - _$0.y) * _$0.dt;
    _$0.dz = (_$0.x * _$0.y - _$0.beta * _$0.z) * _$0.dt;
    _$0.x += _$0.dx;
    _$0.y += _$0.dy;
    _$0.z += _$0.dz;
  }

  function _3() {
    var ranr;
    _$0.px[_$0.i] = _$0.x;
    _$0.py[_$0.i] = _$0.y;
    colorMode(HSB);

    for (var j = 0; j < _$0.i; j += 1) {
      push();
      stroke(j / 2 % 255, 255, 100);
      strokeWeight(2 / _$0.scl);
      beginShape();
      vertex(_$0.px[j], _$0.py[j]);
      vertex(_$0.px[j + 1], _$0.py[j + 1]);
      endShape();
      pop();
    }

    _$0.i++;
  }

  function _4() {
    background(51);
    _$0.scl = _$0.scale_slider.value();
    text('SCALE', 50, 37);
    text(_$0.scl + 'x', 250, 37);
    scale(_$0.scl);
    translate(width / 2 / _$0.scl, height / 2 / _$0.scl);

    _$0.setPoints();

    _$0.lines();
  }

  setup = _0;
  bg = _1;
  setPoints = _2;
  lines = _3;
  draw = _4;
  scale_slider = void 0;
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
}).call(this);