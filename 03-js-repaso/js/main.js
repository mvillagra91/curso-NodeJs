//alert("Hola soy mario villagra")

let datos = document.querySelector("#datos")

datos.innerHTML = `
    <h1>Hola Mundo</h1>
`
let edad = 19

if(edad>= 18? datos.innerHTML = `Eres mayor de edad`: datos.innerHTML = `No eres mayor de edad`);

//array
let divNombres = document.querySelector("#nombres");


let nombres = ["Mario", "zoes", "ursus", "yuriko", "etc"];


divNombres.innerHTML = `<ul>lista de nombres`

for (let nombre of nombres)
    divNombres.innerHTML += "<li>" + nombre + "</li>"


divNombres.innerHTML += `</ul>`

//funciones
const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>${nombre} mide ${altura} cm</h1>
    `
console.log(nombre, altura)

    let divDatos = document.querySelector("#informacion")

    console.log(misDatos);

    divDatos.innerHTML = misDatos
}

miInformacion("Mario", 178);

//Promesas

var saludar = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let saludo = "Hola buenas tardes";
        saludo = false

        if(saludo){
            resolve(saludo)
        }else
            reject("No hay saludo disponible")
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
}).catch(error =>{
    alert(error)
})