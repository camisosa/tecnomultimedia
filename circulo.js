class Circulo{

    constructor(posX_, posY_, tam_, contorno_, relleno_){
        this.posX = posX_;
        this.posY = posY_;
        this.tam = tam_;
        this.valor = mouseX;
        this.contorno = contorno_;
        this.relleno = relleno_;
    }

    dibujar(){
        push();
        blendMode(DIFFERENCE);
        stroke(this.relleno);
        strokeWeight(this.contorno);
        noFill();
        ellipse( this.posX , this.posY , this.tam , this.tam );
        blendMode(BLEND);
        pop();
    }

   darColor(){
    if ( this.relleno > 255){
        this.relleno = 255;
    }else{
        this.relleno = this.relleno + 5;
    }
   }
   quitarColor(){
    if (this.relleno < 0){
    this.relleno = 0;
   }else{
    this.relleno = this.relleno -3;
   }
  }

}