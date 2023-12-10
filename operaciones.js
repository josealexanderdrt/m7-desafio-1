const fs = require('fs');

const registrar = ( nombre_animal, edad, tipo_animal, color_animal, enfermedad) =>{
    const paciente_registro = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    paciente_registro.push({nombre_animal, edad, tipo_animal,color_animal, enfermedad })
     fs.writeFileSync('citas.json',JSON.stringify(paciente_registro))

}


const leer = ()=>{
    const paciente_registro = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(paciente_registro)
 
} 


module.exports = {registrar, leer}