
function Renderizacao() {
    function renderizaInformacao(x) {
        if (x) {
            return (
                <h2>Verdadeiro! Imprimo uma informação!</h2>
            )
        } else {
            return (
                <h2>Falso! Imprimo outra informação!</h2>
            )
        }
    }
    return (

        <div>
            {renderizaInformacao(true)}
            {renderizaInformacao(false)}
        </div>
    )
}

export default Renderizacao