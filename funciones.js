// definir funciones
//variables globales
var Peso;
var Altura;
//definir contador y acumulador
var contesta = 0;
var acumesta = 0;

var peso1 = 0;
var peso2 = 0

function ingresardatos(){
Peso = parseFloat(prompt('Ingresar el peso'))
Altura = parseFloat(prompt('Ingresar la altura'))
contesta++;
acumesta += Altura;
peso1 += Peso;
peso2++;
}
function preguntar(){
    var respuesta = prompt('Desea  continuar? (Si/No)').toLowerCase();
    return respuesta == 'si' || respuesta =='SI';

}
function calcularimc()
{
    //variable local
    let imc = Peso/(Altura*Altura);
    if(imc<18.5){
        console.log("IMC ES "+ imc.toFixed(2) + "Clasificacion bajo peso");
    }else if(imc>=18.5 && imc <25)
    {
        console.log("IMC ES "+imc.toFixed(2)+ "Clasificacion normal");
    }else if(imc>=25 && imc < 30){
        console.log("IMC ES "+imc.toFixed(2)+ "Clasificacion sobre peso");
    }else
    {
        console.log("IMC ES "+imc+ "Clasificacion obeso");
    }    




}
    function Promedioaltura()
{
    if(contesta ==0){
        console.log('no se ha ingresado datos de altura')
        }else{
            let promedio = acumesta/contesta;
            console.log('El promedio de estatura es : '+promedio.toFixed(2)," metros");
    }
}

    function promedioPeso()
{
    if(peso1 ==0){
        console.log('no se ha ingresado datos del peso')
    }else{
        let promedioPeso = peso1/peso2;
        console.log('El promedio del peso es : '+promedioPeso.toFixed(2) + "Kg");
    }
}
do{
    ingresardatos();
    calcularimc();

}while(preguntar());
Promedioaltura();
promedioPeso();
