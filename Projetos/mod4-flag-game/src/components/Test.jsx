import { useEffect, useState } from 'react'

function Test() {
    const [flags, setFlags] = useState({});

    useEffect(() => {
        // Comando para chamar a API e buscar as informações
        fetch('https://flagcdn.com/en/codes.json')

            // ATENÇÃO!
            // Esse é o verbo GET por padrão

            // Converter a resposta em JSON
            // Porque JSON? Porque é um formato leve e fácil de trabalhar com dados
            .then(response => response.json())
            // Atualizar o estado com os dados recebidos
            .then(data => setFlags(data))

            // Fiz isso para ver como apareceriam os dados no console do navegador
            console.log(flags);

    }, []);

    return (
        <div>
            <ul>
                {/* Object.entries transforma o objeto "flags" em um array de arrays */}
                {Object.entries(flags).map(([code, name]) => (<li key={code}>{code} - {name}</li>))}
            </ul>
        </div>
    )
}

export default Test