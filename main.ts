// EJERCICIO1: Funcion que reciba 2 numeros y retorne cual es mayor de los 2. si son iguales que retorne son iguales

let numero1: number = 0;
let numero2: number = 0;

const comparar = (numero1, numero2): string => {

    if (numero1 > numero2) {
        return 'El numero ' + numero1 + ' es mayor a ' + numero2;
    }
    if (numero1 < numero2) {
        return 'El numero ' + numero1 + ' es menor a ' + numero2;
    }
    if (numero1 == numero2) {
        return 'El numero ' + numero1 + ' es igual a ' + numero2;
    }

}
console.log(comparar(5, 3));
console.log(comparar(3, 9));
console.log(comparar(5, 5));

// EJERCICIO2 Declara un String que contenga tu nombre, después muestra un mensaje 
// debienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca“Bienvenido Fernando”.

let nombre: string = '';

const bienvenida = (nombre): string => {
    return 'Bienvenido ' + nombre;

}
console.log(bienvenida('Alex'));

// EJERCICIO3 Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir (recuerda usar prompt).
// sin prompt

console.log(bienvenida('Pepe'));
console.log(bienvenida('Carlos'));
console.log(bienvenida('Juan'));

// EJERCICIO4 Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// por teclado (recuerda pasar de String a double con parseDouble). Usa laconstante PI.

let radio: number = 0;

const calculoArea = (radio): number => {

    const pi: number = 3.1416;

    return pi * radio * 2;

}
console.log(calculoArea(5));

// EJERCICIO5 Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también debemos indicarlo.

let numeroDivision: number = 0;

const divisible = (numeroDivision): string => {

    if (numeroDivision % 2 == 0) {

        return 'El numero si es divisible entre 2';

    } else {

        return 'El numero no es divisible entre 2';
    }
}

console.log(divisible(2));
console.log(divisible(3));

// EJERCICIO6 Lee un número por teclado que pida el precio de un producto (puede tenerdecimales) y calcule el precio final con IVA. El IVA sera una constante que seradel 21%

let precio: number = 0;

const ivaCalculo = (precio): string => {

    const iva: number = 0.21;

    return 'El IVA de ' + precio + ' es ' + iva * precio;
}

console.log(ivaCalculo(200));


// EJERCICIO7 Muestra los números del 1 al 100 (ambos incluidos).

let x: number = 0;

const contadorCien = (): number => {

    while (x < 100) {

        x++;
        console.log(x);
    }
    return;

}

contadorCien();

// EJERCICIO_EXTRA Crea un programa que muestre la tabla de multiplicar del numero que pongas

let numeroMultiplicar: number = 0;
let i: number = 1;

const tabalMultiplicar = (numeroMultiplicar): number => {

    for (i; i <= 10; i++) {

        let tabla: number = numeroMultiplicar * i;
        console.log(i + ' multiplicado por ' + numeroMultiplicar + ' es ' + tabla);
    }
    return
}

tabalMultiplicar(5);

// EJERCICIO8 Haz el mismo ejercicio7  con un bucle for.

let i2: number = 1;

const contadorCien2 = (): number => {

    for (i2; i2 <= 100; i2++) {

        console.log(i2);
    }
    return;

}

contadorCien2();

// EJERCICO9 Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle que desees.

let i3: number = 1;

const comprobarDivisible = (): number => {

    for (i3; i3 <= 100; i3++) {

        if (i3 % 2 == 0 || i3 % 3 == 0) {
            console.log('Divisibles entre 2 o 3 -->' + i3);

        }
    }
    return;
    
}
comprobarDivisible();