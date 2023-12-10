const {registrar, leer} = require('./operaciones');
const [operacion, nombre_animal, edad, tipo_animal, color_animal, enfermedad] = process.argv.slice(2);


if (operacion === "registrar") {
    registrar(nombre_animal, edad, tipo_animal, color_animal, enfermedad);
    console.log('Registro Exitoso')
}
else if (operacion === "leer"){
    leer();
}
else {
    console.log('Operacion no disponible')
}
