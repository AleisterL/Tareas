
//Ejercicio 4 Figuras
{
console.log("Menu");
let menu = prompt ("Selecciona la figura de la cual deseas más información \n1. Triángulo \n2. Rectángulo\n3.Círculo\n4. Polígono");

    switch(menu){
        case "1":
            //Función de triángulo
            function triangulo(){
                let lado = prompt("Ingrese la medida de un lado del triángulo: ");
                let altura = Math.sqrt((lado**2)-((lado/2)**2))  ;
                let perimetro = lado * 3;
                let area = (lado * altura)/2;
                console.log("El área del triángulo es: ", area , "y su perimetro es: " , perimetro);
            }
            triangulo();
            break;
        case "2":

        //Función de Rectángulo
            function rectangulo(){
                let base = prompt("Ingrese la medida de la base: ");
                let altura =prompt("Ingrese la medida de la altura del rectángulo.");
                let perimetro = (base*2)+(altura*2);
                let area = base * altura;
                console.log("El área del rectángulo es: ",area,"y su perimetro es: ", perimetro);
            }
            rectangulo();
            break;
        case "3":

        //Función de Círculo
            function circulo(){
                var pi = 3.14159265;
                let radio = prompt(" Ingresa el radio: ");
                let perimetro = pi * radio*2 ;
                let area = pi * radio**2;

                console.log("El área del círculo es: ",area,"y su perimetro es: ", perimetro);
                //alert("El área del círculo es: ",area,"y su perimetro es: ", perimetro);
            }
            circulo();
            break;
        case "4":

        //Función de Polígono
            function Poligono(){
                let n = prompt("Ingresa el número de lados del polígono: ");
                let lado = prompt("Escriba la medida de uno de sus lados: ");
                let apotema = prompt("Escriba la medida de su apotema: ");
                let perimetro = lado * n;
                let area = (perimetro * apotema)/2;

                console.log("El área del polígono es: ",area,"y su perimetro es: ", perimetro);
                //alert("El área del polígono es: ", area ,"y su perimetro es: " , perimetro)
            }
            Poligono();
        break;
        default:
            console.log("*sonido de equivocado* Eso no se puede amiguito")
    }
}