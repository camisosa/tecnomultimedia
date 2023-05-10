class Conjunto {

    constructor(){
        this.cantidad = 16;
        this.c = [];

        this.c[0] = new Circulo(0, 0, 1000, 50 , 255 );
        this.c[1] = new Circulo(0, 0, 800, 50 , 255 );
        this.c[2] = new Circulo(0, height, 1000, 50 , 255 );
        this.c[3] = new Circulo(0, height, 800, 50 , 255 );
        this.c[4] = new Circulo(width, height, 1000, 50 , 255 );
        this.c[5] = new Circulo(width, height, 800, 50 , 255 );
        this.c[6] = new Circulo(width, 0, 1000, 50 , 255 );
        this.c[7] = new Circulo(width, 0, 800, 50 , 255 );

        this.c[8] = new Circulo(width/2, 0 - height/4, 1100, 10 , 255 );
        this.c[9] = new Circulo(width/2, 0 - height/3.5, 1100, 10 , 255 );
        this.c[10] = new Circulo(width/2,height + height/4, 1100, 10 , 255 );
        this.c[11] = new Circulo(width/2,height + height/4.5, 1100, 10 , 255 );
        this.c[12] = new Circulo(0 - width/4, height/2, 1100, 10 , 255 );
        this.c[13] = new Circulo(0 - width/3.5, height/2, 1100, 10 , 255 );
        this.c[14] = new Circulo(width + width/4, height/2, 1100, 10 , 255 );
        this.c[15] = new Circulo(width + width/4.5, height/2, 1100, 10 , 255 );

    }

    dibujar() {
        for( let i=0 ; i<this.cantidad ; i++ ){
        this.c[i].dibujar();
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

