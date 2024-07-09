//2da PreEntrega 




alert("Bienvenidos a nuestras plataforma de CineSpace");
 nombre = prompt( "Ingresa tu Nombre" );
if ( nombre == ""){
 alert("NO Ingresaste tu nombre ");
}
else{
    alert(" Excelente " + nombre);
}

alert(" Bienvenido A Nuestra plataforma ");
pelicula = prompt( "Que pelicula deseas ver?");


golosinas = prompt( "Que tamaño de combo quieres? grande, mediano o chico").toLowerCase();
cantidad = parseInt(prompt("Cuántos deseas comprar?"));




const combos = [

    {nombre: "grande",
        precio: 5000},

    {nombre: "mediano",
        precio: 3000}, 

    {nombre: "chico", 
        precio: 2000},

    
]

combos.push(

    {nombre: "comboLata",
    precio: 10000
}
)

console.log(combos);

let detallesDeCombos = "Detalles de los combos:\n";

combos.forEach(function(combo) {
    detallesDeCombos += "Nombre: " + combo.nombre + ", Precio: " + combo.precio + "\n";
});

alert(detallesDeCombos)

alert("Gracias por tu compra. Disfruta la funcion");