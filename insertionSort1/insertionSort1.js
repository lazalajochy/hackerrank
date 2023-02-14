//https://www.hackerrank.com/challenges/insertionsort1/problem?isFullScreen=true
/*
1.entender el problema (analizar los datos de entradas y salidas proporcionados)
2.descomponer el problema en subproblemas
3.hacer una descripcion de como abordar los subproblemas
4.escribir el codigo que aborda cada subproblema
5.depurar el codigo
 
 
 
3.1--- un bucle 
3.2--- hacer comparacion de los valores de derecha a izquierdad
3.3.--- cuando el valor mas a la izquierdad sea mayor al valor de la derecha,
sustituir el valor de la derecha por el de la izquierda e imprimir  
mientras el valor de la derecha no sea mayor a un valor de la izquierdad, este no puede perder su valor
*/

arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

insertSort1(arr);

function insertSort1(arr) {

    let currentValue, nextValue, indexValue = arr.length - 1;
    currentValue = arr[indexValue]
    for (let i = arr.length - 1; i >= 0; i--) {
        nextValue = arr[i - 1];
        if (nextValue > currentValue) {
            arr.splice(indexValue, 1, nextValue);
            console.log(arr.join(" "));
            indexValue = i - 1;
        } else {
            arr.splice(i, 1, currentValue);
            currentValue = arr[i - 1]
            indexValue = i - 1;
            console.log(arr.join(" "))
        }
    }
}
