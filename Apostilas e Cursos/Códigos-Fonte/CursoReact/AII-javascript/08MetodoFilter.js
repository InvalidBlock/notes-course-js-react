const funcionarios = [
    {nome:"João", departamento: "TI", salario:5000},
    {nome:"Maria", departamento: "RH", salario:4500},
    {nome:"Pedro", departamento: "TI", salario:6000},
    {nome:"Ana", departamento: "Vendas", salario:4000},
    {nome:"José", departamento: "TI", salario:8500}

]

const equipeTI = funcionarios.filter((func) => func.departamento === "TI")
.map((func)=>({...func,tipo:func.salario>5000?"pleno":"junior"}));
console.log(equipeTI);


