// Dentro da chaves apenas, é JS;
function MeuPrimeiroComponente() {

    const nome = "Paulo Vieira";
    const idade = 32;
    const saldo_atual = 1250;
    const saldo_mes_anterior = 3980;

    // Dentro do Return é o HTML, por isso dai tem que abrir as chaves;
    return (
        <div>
            {/*Primeiro componente criado no curso*/}
            <h1>Meu Primeiro Componente</h1>
            <p>Exemplo de criação de componente</p>
            <p></p>
            <p>Usuário: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Saldo Atual: {saldo_atual}</p>
            <p>Saldo do Mês anterior: {saldo_mes_anterior}</p>
            <p>Diferença de Saldo: {saldo_mes_anterior - saldo_atual}</p>
        </div>
    )
}

export default MeuPrimeiroComponente