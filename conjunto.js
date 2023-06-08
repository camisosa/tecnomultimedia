class Conjunto {

    constructor(){
        this.cantidad = 9;
        this.c = [];
        this.c[0] = new Circulo(0,0,700,false,true,false);
        this.c[1] = new Circulo(width,0,700,true,true,false);
        this.c[2] = new Circulo(0,height,700,false,false,true);
        this.c[3] = new Circulo(width,height,700,false,true,false);
        this.c[4] = new Circulo(width/2,height+50,700,true,false,false);
        this.c[5] = new Circulo(width/2,-50,700,true,false,false);
        this.c[6] = new Circulo(width+50,height/2,700,true,false,false);
        this.c[7] = new Circulo(-50,height/2,700,true,false,false);
        this.c[8] = new Circulo(width/2,height/2,100,false,false,true);
    }

    dibujar() {
        noStroke();
        fill("red");
        rect(width/2-250,height/2-250,500,500);
        fill("blue");
        rect(0,0,80,580);
        fill("green");
        rect(80,0,width,80);
        fill("orange");
        rect(width-80,0,80,height);
        fill("purple");
        rect(0,height-80,width-80,80);
        for( let i=0 ; i<this.cantidad ; i++ ){
        this.c[i].dibujar();
        this.c[i].grosorDeLasLineas();
        }
    }

    darColor() { 
        for( let i=0 ; i<this.cantidad ; i++ ){
            this.c[i].darColor();
        }
    }

    quitarColor(){
        for( let i=0 ; i<this.cantidad ; i++ ){
            this.c[i].quitarColor();
        }
        
    }
}

