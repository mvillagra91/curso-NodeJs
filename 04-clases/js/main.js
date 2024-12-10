class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    disminuirVelocidad(){
        this.velocidad -=1;
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5
    }

    mostrarAltura(){
        return this.altura;
    }
}

var autobus1 = new Autobus('PEGASIS',200,2017);
console.log("La altura del autobus es: "+autobus1.mostrarAltura());

var coche1 = new Coche("BMW", 200, 2017);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>")

