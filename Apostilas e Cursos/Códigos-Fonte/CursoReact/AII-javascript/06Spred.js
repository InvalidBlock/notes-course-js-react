const frutas = ["maçã","laranja","côco","abacate"];
const vegetais = ["alface","tomate","cenoura"];

const alimentos = [...frutas,...vegetais];

console.log(alimentos);

const copiaFruta = [...frutas];
copiaFruta.push("uva");

console.log(copiaFruta);
console.log(frutas);

const numeros = [10,15,20,45,5];
console.log(Math.max(...numeros));