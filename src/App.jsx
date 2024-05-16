import { useState } from 'react';
import Log from './components/Log';
// Import der GameBoard- und Player-Komponenten
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;

}

// Hauptkomponente der App
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // useState Hook zur Verwaltung des activePlayer-Status, initialisiert auf 'X'
      // const [activePlayer, setActivePlayer] = useState('X');

const activePlayer = deriveActivePlayer(gameTurns);

  // Funktion zur Behandlung der Auswahl eines Spielfeldes und zum Umschalten des aktiven Spielers
  function handleSelectSquare(rowIndex, colIndex) {
    // Aktualisieren des activePlayer-Status, Umschalten zwischen 'X' und 'O'
        // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
     setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer} , ...prevTurns
      ];

      return updatedTurns;
    });
  }

  // Rückgabe der Hauptstruktur des Spiels
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* Rendern der Player-Komponenten, Weitergabe von initialName, symbol und isActive Props */}
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {/* Rendern der GameBoard-Komponente, Weitergabe der handleSelectSquare- und activePlayerSymbol-Props */}
        <GameBoard
        onSelectSquare={handleSelectSquare}
        turns = {gameTurns} 
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
