import { useEffect, useState } from "react"
import Flag from "./Flag"
import "./Game.css"

function Game() {
    const [flags, setFlags] = useState({});
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [flagUrl, setFlagUrl] = useState('');

    const [message, setMessage] = useState('');

    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        fetch('https://flagcdn.com/en/codes.json')
            .then(response => response.json())
            .then(data => setFlags(data))
            .catch(error => console.log('Error fetching flags:', error));
    }, []);

    useEffect(() => {
        console.log("Flags", flags);
        Object.keys(flags).length > 0 && startNewRound();

    }, [flags]);

    function startNewRound() {

        const flagCodes = Object.keys(flags);
        console.log("Flag codes", flagCodes);

        const selectedCodes = [];
        while (selectedCodes.length < 5) {
            // Math.floor é para pegar o número inteiro, enquanto Math.random pega um número aleatório entre 0 e 1 que é multiplicado pelo tamanho do array
            const randomIndex = Math.floor(Math.random() * flagCodes.length);
            const randomCode = flagCodes[randomIndex];
            if (!selectedCodes.includes(randomCode)) { selectedCodes.push(randomCode); }
        }

        console.log("Selected codes", selectedCodes);

        const correctIndex = Math.floor(Math.random() * selectedCodes.length);
        const correctCode = selectedCodes[correctIndex];

        setCorrectAnswer(flags[correctCode]);
        setFlagUrl(`https://flagcdn.com/w320/${correctCode}.png`);
        setOptions(selectedCodes.map(code => flags[code]));

        setAnswered(false);
        setMessage('');
    }

    const handleOptionClick = (selectedFlag) => {
        setAnswered(true);
        if (selectedFlag === correctAnswer) {
            setMessage('Correct!');
            setCorrectCount(correctCount + 1);
        } else {
            setMessage(`Wrong!`);
            setIncorrectCount(incorrectCount + 1);
        }
    }

    setTimeout(() => {
        if (answered) {
            startNewRound();
        }
    }, 2000);

    return (
        <div className="game-container">
            <h1 className="game-title">Flag Game</h1>
            <div className="scoreboard">
                <p className="score correct">Correct: {correctCount}</p>
                {message ? <p className={message === 'Correct!' ? 'score correct' : 'score wrong'}>{message}</p> : <p></p>}
                <p className="score wrong">Incorrect: {incorrectCount}</p>
            </div>
            <h2 className="question">Guess the country</h2>
            <div className="flag-container">{flagUrl && <Flag flagUrl={flagUrl} />}</div>
            <div className="options-container">
                {options.map((option, index) => (
                    <button key={index} className={answered && option == correctAnswer ? "option-button correct-option" : "option-button"} onClick={() => handleOptionClick(option)} disabled={answered}> {index+1}. {option} </button>
                ))}
            </div>
        </div>
    )
}

export default Game