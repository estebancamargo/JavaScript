//si el primero es mayor al segundo mostrar la suma de esos dos numero y mostrar la diferencia, en caso contrario informar la suma y diferencia de la division

let Num1,Num2,Suma,Dife;


Num1 = parseFloat(prompt("Ingresar numero 1"));
Num2 = parseFloat(prompt("Ingresar numero 2"));


if (Num1>Num2) 
{
    Suma = Num1 + Num2;
    Dife = Num1 - Num2;
    console.log('La suma es '+ Suma);
    console.log('La diferencia es '+Dife)
}else{
    Prod = Num1*Num2;
    Div = Num1/Num2;
    console.log('El producto es '+Prod)
    console.log('La division es '+Div)
}

document.write(Resultado)

