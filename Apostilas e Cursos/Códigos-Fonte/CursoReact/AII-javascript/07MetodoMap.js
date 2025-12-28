const numeros = [2,3,4,5,7]

const quadrados = numeros.map((num)=> num*num );

console.log(quadrados);

const produtos = [
    {nome:"Notebook", preco:2500},
    {nome:"Mouse", preco:50},
    {nome:"Teclado", preco:150}
]

const precos = produtos.map((prod) => prod.preco );
console.log(precos);