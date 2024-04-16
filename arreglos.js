//definimos el array
let Numeros = [1,2,3,4,5];
console.log(Numeros);

//acceder al elemento del array

console.log('El primer elemento',Numeros[0]);
console.log('El ultimo elemento',Numeros[4]);

//modificar elementos del array
Numeros[3]=50;
console.log(Numeros);

//añadir elementos al array 
Numeros.push(6);
console.log(Numeros);

//eliminar ultimo elemento al array
let ultimo = Numeros.pop();
console.log(ultimo);

//recorre el array
for(let i=0;i<=Numeros.length;i++){
    console.log('elemento ',i,":",Numeros[i]);
}



let Ciudades = ["Bogota","Cali","Medellin","Barranquilla","Armenia","Armenia","Pereira","Ibague"]
console.log('La 3 ciudad es' ,Ciudades[3]);

