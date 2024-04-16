// definir variables

let Num1 = 10; //numerica
let Nombre = "Esteban"; //texto
let Estado = true; //boleano
let lista = [1,2,3,4,5]; //arreglo
let Persona = {Nombre:"Julian",Apellido:"Camargo",Email:"camargoesteban@gmail.com"} //objeto

console.log(Num1);
console.log(Nombre);
console.log(Estado);
document.write(lista);
console.log(Persona);
document.write(Persona.Nombre);

//definir constante

const Ambiente = 109;

console.log(Ambiente)

//condicionales
//ingreso de datos x teclado
let Noestudiante;
let Nota;

Noestudiante = prompt('Por favor ingresar nombre del estudiante');
Nota = parseFloat(prompt('Ingresar nota'));

if(Nota >= 3.8)
{
    document.write(Noestudiante + 'esta aprobado con una nota de '+Nota);
}
else {
    document.write(Noestudiante+' '+'No aprobo la materia con la nota '+Nota);
}