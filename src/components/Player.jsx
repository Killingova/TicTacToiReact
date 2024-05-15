import { useState } from "react";

// Definition der Player-Komponente, die initialName, symbol und isActive als Props entgegennimmt
export default function Player({ initialName, symbol, isActive }) {
  // useState Hook zum Verwalten des playerName-Status, initialisiert mit initialName-Prop
  const [playerName, setPlayerName] = useState(initialName);

  // useState Hook zum Verwalten des isEditing-Status, initialisiert auf false
  const [isEditing, setIsEditing] = useState(false);

  // Funktion zum Umschalten des isEditing-Status, wenn die Bearbeiten-Schaltfläche angeklickt wird
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // Funktion zum Aktualisieren des playerName-Status, wenn sich der Eingabewert ändert
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // Initiales JSX-Element zur Anzeige des Spielernamens als Span
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // Wenn isEditing true ist, wird das JSX-Element in ein Eingabefeld zur Bearbeitung des Spielernamens geändert
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  // Rückgabe des Spieler-Items, bedingtes Hinzufügen der 'active'-Klasse, wenn isActive true ist
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Speichern' : 'Bearbeiten'}</button>
    </li>
  );
}
