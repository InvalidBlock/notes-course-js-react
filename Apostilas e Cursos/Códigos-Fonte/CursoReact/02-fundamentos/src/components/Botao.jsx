
function Botao() {
    function handleClick(){
        alert("Você clicou no botão!");
    }

  return (
    <div>
        <button onClick={handleClick}>Clique Aqui!</button>
    </div>
  )
}

export default Botao