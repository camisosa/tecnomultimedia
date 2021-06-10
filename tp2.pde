int estado = 0; //estados de pantalla
int estadoimag = 0;
PImage f0,pato,pato2,cisne; 
PFont titulo, creditos, subcreditos; //fuentes
int x1,y1,x2,y2,x3, s1;
int fondo;
int  transTexto;

void setup(){
  size(500,500);
  titulo = loadFont ("Algerian-48.vlw");
  creditos = loadFont("BellMTItalic-48.vlw");
  subcreditos = loadFont ("BellMTBold-48.vlw");
  f0 = loadImage ("0.png"); 
  pato = loadImage ("pato.png"); 
  pato2 = loadImage ("pato2.png"); 
  cisne = loadImage ("cisne.gif"); 
  x1 = 5;
  x2 = 250;
  y1 = 100;
  y2 = 250;
  x3 = 0;
  s1= 0;
}
void draw(){
  background(0);
if(estado == 0){//no se veran los creditos
textFont(subcreditos,20);
  text("clikc para ver los\ncreditos creditos",165,240);
  x1 = 5;
  x2 = 250;
  y1 = 100;
  y2 = 250;
  x3 = 0;
  s1= 0;
  transTexto = 1;
}
 
if(estado == 1){
  estadoimag = 1; 
  if(estadoimag == 1){
    
    x2=x2+1;
    y2=y2+1;
    image(f0,x3,0,x2,y2);
    if(y2>500){
    x2=width;
    y2=height;
    }
    //comienzo de los creditos 
    textFont(titulo,100);
    fill(#FAFAFC,transTexto++);
    text("El\n\n   patito\n\n          feo", x1,y1);
    if(transTexto > 300){
    x1=x1-2;
    x3=x3-2;
    if (x1 < -500){
      s1--; 
    image(pato,150,(s1 + 500),200,200); 
    image(pato2,150,(s1 + 950),200,200); 
    image(cisne,150,(s1 + 1700),200,200);
    textFont(subcreditos,20);
    text("Escrito por",180,(s1 + 700),200,200);
    text("Canciones y particulas de",130,(s1 + 870),400,400);
    text("Con las voces de",180,(s1 + 1150),500,500);
    text("Dirigido por",200,(s1 + 1560),400,400);
    textFont(subcreditos,15);
    text("Inspirado en la historia de Hans Christian Andersen",70,(s1 + 830),500,500);
    textFont(creditos,50);//nombres
    text("Sue Radley & Martin Gates",100,(s1 + 730),400,400);//Escrito por
    text("Christian Caswell",70,(s1+900),500,500); //Canciones y particulas de
    //Con las voces de
    text("Paul Pantig",130,(s1 + 1180),500,500);
    text("Imelda Staunton",90,(s1 + 1220),500,500);
    text("Hugh Laurie",115,(s1 + 1260),500,500);
    text("Alison Steadman",100,(s1 + 1300),500,500);
    text("Peter Bayliss",120,(s1 + 1340),500,500);
    text("Gary Martin",120,(s1 + 1380),500,500);
    text("Maria Darling",120,(s1 + 1420),500,500);
    text("Sally Kinghorn",120,(s1 + 1460),360,500);
    text("Mark Lockyer",120,(s1 + 1500),500,500);
    //Dirigido por
    text("David Elvin",120,(s1 + 1600),500,500); 
    text("Marin Gates",120,(s1 + 1650),500,500);
    }
  }
   }  
  }

if(estado == 2 || s1 <= -1950 ){
  estado = 0;
  estadoimag = 0;
}
}
void mouseClicked (){
estado++;
}
