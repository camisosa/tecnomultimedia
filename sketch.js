let conjuntoDeObras;

/*------CLASIFICADOR-----
let classifier;
let label;
const classModel = 'https://teachablemachine.withgoogle.com/models/K7u4qibed/'; //url del modelo producido con Teachable Machine

//---SONIDO CONFIG------------------------------------------------------------------------------------------------
let AMP_MAX= 0.1;
let AMP_MIN= 0.01;

//ENTRADA DE AUDIO
let mic;

//AMPLITUD
let amp;
let haySonido = false;


//---SETUP CONFIG-----------------------------------------------------------------------------------------------
*/
let img;
function preload() {
  img = loadImage('data/factura.jpg');
}
function setup() {
  createCanvas(windowHeight, windowHeight);
  this.conjuntoDeObras = new Conjunto();
  image(img,0,0);
/*
  classifier.classify(gotResult);
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio();*/
}

function draw() {
  background(0,200,100);

  /*config sonido
  amp = mic.getLevel();
  haySonido = amp > AMP_MIN;
*/
  this.conjuntoDeObras.dibujar();
  this.conjuntoDeObras.quitarColor();
}
function mouseMoved(){
  this.conjuntoDeObras.expandirGrosor();  
  this.conjuntoDeObras.darColor();
}

function mouseClicked(){
  this.conjuntoDeObras.cambiarDeEstado();

}

function keyPressed(){
  this.conjuntoDeObras.cambioDeColores();
}


/*//--------CLASIFICADOR-------------------------------------------------------------------------------
function preload() {
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier(classModel + 'model.json'); 
}

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  //console.log(results);
  // Show the first label and confidence
  label = results[0].label;
}*/
