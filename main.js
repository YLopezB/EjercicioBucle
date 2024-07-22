/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/
let num = 0
num = parseInt(prompt("Ejercicio 1: Ingrese un numero para conocer su tabla de multiplicar: "))
let resul = 0

console.log("Ejercicio 1. Resultado")
for(let i = 0; i < 10; i++){
    resul = num * (i+1)
    console.log(num+" x " +(i+1)+" = " + resul )
}
alert("Ejercicio 1: Ver resultado por consola")
console.log("")

/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/ 

let lista =[]
do {
    num = parseInt(prompt("Ejercicio 2: Ingrese un numero diferente a 0 para almacenar y 0 para parar: "))
    if (num == 0){
        alert("Ingreso el numero 0, no se guardo en la lista")
        break
    }else{
        lista.push(num)
    }
} while (num !== 0);
alert("Numeros almacenados son: "+lista)

/*3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/

let numeroSecreto = 50
let numeroIngresado = 0
let itentos = 0

while(numeroIngresado !== numeroSecreto){
    numeroIngresado = parseInt(prompt("Ejercicio 3: Adivina el numero, ingresa un numero"))
    if(numeroIngresado < numeroSecreto){
        alert("El número "+numeroIngresado+" es menor al número que debes adivinar, intenta nuevamente")
    } else if(numeroIngresado > numeroSecreto){
        alert("El número "+numeroIngresado+" es mayor al número que debes adivinar, intenta nuevamente")
    }
    itentos += 1
}

alert("Felicidades, ganaste y adivinaste el numero en "+itentos+ " intentos")

/*4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo. */

num = parseInt(prompt("Ejercicio 4: Ingrese un número para conocer si es primo o no: "))
let divisores = 0

for(let i = 1; i <= num; i++){
    let modulo = num % i
    if (modulo === 0){
        divisores += 1
    }
}

if (divisores == 2){
    alert("El numero "+num+ " es primo")
}else{
    alert("El numero "+num+ " no es primo")
}

/*5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.*/

num = parseInt(prompt("Ejercicio 5: Ingrese un número para conocer sus divisores: "))
let divisoresNum = []
let contador = 0

for(let i = 1; i <= num; i++){
    let modulo = num % i
    if (modulo === 0){
        divisoresNum.push(i)
        contador ++
    }
}
alert(+num+" tiene "+contador+" divisores y son: "+divisoresNum)

/*6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.*/

let array = ["Casa","Tarro","Posillo","Marcador","Lapicero","Lapiz","Televisor","Radio","Ventana","Puerta"]
console.log("Ejercicio 6. Resultado:")
for (let i = 0; i < array.length; i++){
    console.log((i+1)+". "+array[i])
}
alert("Ejercicio 6: Ver resultado por consola")
console.log("")

/*7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.*/

alert("Ejercicio 7: Ver resultado por consola")
let arrayNum = [1,2,3,4,5,6,7,8,9,10]
let mult = 0
console.log("Ejercicio 7. Resultado:")
for(let doble in arrayNum){
    mult = arrayNum[doble] * 2
    console.log("El doble de "+arrayNum[doble]+" es: "+mult)
}
console.log("")

/*8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.*/
alert("Ejercicio 8: Ver resultado por consola")
let familia = [
    {nombre: "Yeison", apellido: "Lopez", edad: 32, ocupacion: "Ingeniero de Software"},
    {nombre: "Leticia", apellido: "Lopez", edad: 67, ocupacion: "Ama de Casa"},
    {nombre: "Jose", apellido: "Lopez", edad: 53, ocupacion: "Vendedor"},
    {nombre: "Stefani", apellido: "Zapata", edad: 28, ocupacion: "Psicologa"},
    {nombre: "Juan", apellido: "Lopez", edad: 21, ocupacion: "Estudiante"}
    ]
console.log("Ejercicio 8. Resultado:")
for (let persona of familia) {
    console.log("Hola, mi nombre es "+persona.nombre+" "+persona.apellido+", tengo " +persona.edad+ " años y soy "+persona.ocupacion);
}
console.log("")

/*9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.*/

alert("Ejercicio 9: Ver resultado por consola")
console.log("Ejercicio 9. Resultado:")
console.log(arrayNum)
for(let numero in arrayNum){
    modulo = arrayNum[numero] % 2
    if (modulo !== 0){
        console.log("Impar: "+arrayNum[numero])
    }
}
console.log("")

/*10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.*/

let numImpar = 0
let numPar = 0
let listaImpar = []
let listaPar = []

while (num !== 0){
    num = parseInt(prompt("Ejercicio 10: Ingrese un numero diferente a 0 para almacenar y 0 para parar: "))
    if (num == 0){
        alert("Saliendo del programa")
        break
    }else{
        modulo = num % 2 
        if (modulo == 0){
            listaPar.push(num)
            numPar += num
        }
        else{
            listaImpar.push(num)
            numImpar += num
        }
    }
}
alert("La suma de los numeros pares "+listaPar+" es: "+numPar)
alert("La suma de los numros impares "+listaImpar+" es: "+numImpar)

/*11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.*/

let maximo = 0
let arrayNumDes = [5,4,6,8,4,9,10,15,0,1]

for (let i = 0; i < arrayNum.length; i++){
    if (arrayNumDes[i] > maximo){
        maximo = arrayNumDes[i]
    }
}
alert("Ejercicio 11: La lista de numeros es: "+arrayNumDes+ " su numero mas grande es: "+maximo)


/*12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.*/

let minimo = 0
for (let i = 0; i < arrayNum.length; i++){
    if (arrayNumDes[i] < minimo){
        minimo = arrayNumDes[i]
    }
}
alert("Ejercicio 12: La lista de numeros es: "+arrayNumDes+ " su numero mas chico es: "+minimo)

/*13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.*/

let jugador1 = prompt("Ejercicio 13: Piedra, papel o tijera Ingrese el nombre del jugador 1")
let jugador2 = prompt("Ingrese el nombre del jugador 2")
let empate = true
/* 1 gana a 3 - 2 gana a 1 - 3 gana - 2*/

while(empate){
    let opcion1 = parseInt(prompt("Turno de "+jugador1+" ingresa: 1. para Piedra, 2. para Papel o 3. para Tijera"))
    let opcion2 = parseInt(prompt("Turno de "+jugador2+" ingresa: 1. para Piedra, 2. para Papel o 3. para Tijera"))
    if ((opcion1 > 3 || opcion1 < 1) || (opcion2 > 3 || opcion2 < 1)){
        alert("La opcion ingresada no es valida. Intenta de nuevo")
    }
    else if (opcion1 === opcion2){
        alert("Ha habido un empate, jugaremos otra mano")
    }else{
        if(opcion1 === 1){
            if(opcion2 === 2){
                alert("Jugardor 2: "+jugador2+" gano")
            }
            else if (opcion2 === 3){
                alert("Jugardor 1: "+jugador1+" gano")
            }
        }
        else if(opcion1 === 2){
            if(opcion2 === 1){
                alert("Jugardor 1: "+jugador1+" gano")
            }
            else if (opcion2 === 3){
                alert("Jugardor 2: "+jugador2+" gano")
            }
        }
        else if(opcion1 === 3){
            if(opcion2 === 1){
                alert("Jugardor 2: "+jugador2+" gano")
            }
            else if (opcion2 === 2){
                alert("Jugardor 1: "+jugador1+" gano")
            }
        }
        empate = false
    }
}

/*14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.*/


alert("Ejercicio 14: Triangulo, ver resultado en consola")
console.log("Ejercicio 14. Resultado:")
for (let i = 0; i < 5; i++) {
    let triangulo = '';
    for (let j = 4; j < 0; j--) {
        triangulo = triangulo + ' ';
    }
    for (let j = 0; j < i + 1; j++) {
        triangulo = triangulo + '*';
    }
    console.log(triangulo);
}
console.log("")

/*15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.*/


alert("Ejercicio 15: Triangulo invertido, ver resultado en consola")
console.log("Ejercicio 15. Resultado:")
for (let i = 0; i < 5; i++) {
    let triangulo = '';
    for (let j = 5; j < 0; j--) {
        triangulo = triangulo + ' ';
    }
    for (let j = 5; j > i; j--) {
        triangulo = triangulo + '*';
    }
    console.log(triangulo);
}
console.log("")

/*16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */

let cambio = 0
alert("Ejercicio 16: La lista desordenada es: "+arrayNumDes)
for (let i = 0; i < arrayNum.length; i++){
    for (let j = 0; j < arrayNum.length; j++){
        if (arrayNumDes[i] < arrayNumDes[j]){
            cambio = arrayNumDes[j]
            arrayNumDes[j] = arrayNumDes[i]
            arrayNumDes[i] = cambio
        }
    }
}
alert("Ejercicio 16: La lista ordenada es: "+arrayNumDes)





