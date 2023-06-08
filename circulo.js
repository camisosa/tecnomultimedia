class Circulo{

    constructor(posX_, posY_, tam_, modificarElRojo, modificarElVerde, modificarElAzul){
        this.posX = posX_;
        this.posY = posY_;
        this.tam = tam_;
        this.contorno;
        this.modificarRojo = modificarElRojo;
        this.modificarVerde = modificarElVerde;
        this.modificarAzul = modificarElAzul;
        this.colorRojo =(random(0,255));
        this.colorVerde =(random(0,255));
        this.colorAzul =(random(0,255));
    }

    dibujar(){
        push();
        blendMode(DIFFERENCE);
        stroke(this.colorRojo,this.colorVerde,this.colorAzul);
        strokeWeight(this.contorno);
        noFill();
        ellipse( this.posX , this.posY , this.tam , this.tam );
        blendMode(BLEND);
        pop();
    }

    grosorDeLasLineas(){
        this.contorno = map(mouseX, 0, width, 50, 30);
    }
    
    darColor(){
        if (this.modificarRojo == true){
            if ( this.colorRojo >255){
                this.colorRojo = 255;
            }else{
                this.colorRojo = this.colorRojo + (random(1,5));
            }
        }
        
        if (this.modificarVerde == true){
            if ( this.colorVerde > 255){
                this.colorVerde = 255;
            }else{
                this.colorVerde = this.colorVerde + (random(5,10));
            }
        }

        if(this.modificarAzul == true){
            if ( this.colorAzul > 255){
                this.colorAzul = 255;
            }else{
                this.colorAzul = this.colorAzul + (random(10,15));
            }
        }    
   }

   quitarColor(){
    if (this.modificarRojo == true){
        if ( this.colorRojo < (random(0,50))){
            this.colorRojo = (random(0,50));
        }else{
            this.colorRojo = this.colorRojo - (random(0.5,1));
        } 
    }
    
    if (this.modificarVerde == true){
        if ( this.colorVerde < (random(0,50))){
            this.colorVerde = (random(0,50));
        }else{
            this.colorVerde = this.colorVerde - (random(1.5,2));
        }
    }

    if(this.modificarAzul == true){
        if ( this.colorAzul < (random(0,50))){
            this.colorAzul = (random(0,50));
        }else{
            this.colorAzul = this.colorAzul - (random(2.5,3));
        }
    }
  }

}