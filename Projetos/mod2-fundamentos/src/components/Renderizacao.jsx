function Renderizacao() {

    function renderizarInformacao(x) {
        if (x) {

            return (
                <h2>Imprimo uma Informação!</h2>
            )

        } else {

            return (
                <h2>Não imprimo uma Informação!</h2>
            )

        }
    }

    return (
        <div>

            {renderizarInformacao(true)}
            {renderizarInformacao(false)}

        </div>
    )
}

export default Renderizacao