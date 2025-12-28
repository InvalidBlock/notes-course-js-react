const funcionarios = [
    {nome:"João", departamento: "TI", salario:5000},
    {nome:"Maria", departamento: "RH", salario:4500},
    {nome:"Pedro", departamento: "TI", salario:6000},
    {nome:"Ana", departamento: "Vendas", salario:4000},
    {nome:"José", departamento: "TI", salario:8500}

]

const funcionario = funcionarios.find((func) => func.nome === "Pedro");
console.log(funcionario);

const funcionarioTI = funcionarios.find((func) => func.departamento === "TI");
console.log(funcionarioTI);

const indiceFuncionarioRH = funcionarios.findIndex((func) => func.departamento === "RH");
console.log(indiceFuncionarioRH);