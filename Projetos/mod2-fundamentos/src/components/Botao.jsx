import MeuPrimeiroComponente from "./MeuPrimeiroComponente"

function Botao() {

    function handleClick(){
       alert("Funcionou");
    }

  return (
    <div>
        <button onClick={handleClick}>Clique aqui!</button>
    </div>
  )
}

export default Botao