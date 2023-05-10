let conjuntoDeCirculos;
function setup() {
  createCanvas(windowHeight, windowHeight);
  this.conjuntoDeCirculos = new Conjunto();
  this.fondo = red;
}

function draw() {
  background("black");
  this.conjuntoDeCirculos.dibujar();
  this.conjuntoDeCirculos.quitarColor();
}
function mouseMoved() {
 this.conjuntoDeCirculos.darColor();
}