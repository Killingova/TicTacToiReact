

// Initiales Spielfeld, ein 3x3-Array mit null-Werten
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// Definition der GameBoard-Komponente, die onSelectSquare und activePlayerSymbol als Props entgegennimmt
export default function GameBoard({ onSelectSquare, turns}) {
let gameBoard = initialGameBoard;

for(const turn of turns) {
    const {square, player} = turn;
    const {row,col} = square;

    gameBoard[row][col] = player;
}

/*     // useState Hook zur Verwaltung des gameBoard-Status, initialisiert mit initialGameBoard
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // Funktion zur Behandlung der Auswahl eines Spielfeldes
    function handleSelectSquare(rowIndex, colIndex) {
        // Aktualisierung des gameBoard-Status
        setGameBoard((prevGameBoard) => {
            // Erstellen einer Kopie des Spielfelds
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            // Setzen des Symbols des aktiven Spielers in das ausgewählte Feld
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        // Aufrufen der onSelectSquare-Funktion, um den aktiven Spieler zu wechseln
        onSelectSquare();
    } */

    // Rückgabe der Struktur des Spielfelds
    return (
        <ol id="game-board">
            {/* Iterieren über die Zeilen des Spielfelds */}
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {/* Iterieren über die Spalten der Zeilen */}
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* Button zur Auswahl eines Spielfeldes, der handleSelectSquare aufruft */}
                                <button onClick={ () => onSelectSquare(rowIndex,colIndex)} 
                                disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
