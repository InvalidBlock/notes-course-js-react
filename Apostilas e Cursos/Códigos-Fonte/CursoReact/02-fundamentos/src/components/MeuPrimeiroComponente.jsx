
function MeuPrimeiroComponente() {
    const nome = "Eduardo Gomes";
    const a = 15;
    const b = 25;
  return (
    <div>
        {/*Este é o primeiro componente 
        
        criado no curso*/}
        <h1>Meu primeiro componente</h1>
        <p>Exemplo de criação e componente</p>
        <p>Nome do usuário: {nome}, o resultado da soma é: {a+b}</p>
    </div>
  )
}

export default MeuPrimeiroComponente