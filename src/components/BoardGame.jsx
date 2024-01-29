// import React from "react";
import './BoardGame.css'

const BoardGame = ({ disabledPersons, onGuessClick, persons }) => {
  return (
    <div data-function="boardGame">
      {persons.map((person, index) => (
        <img
          key={index}
          src={person.img}
          alt={person.gender}
          onClick={() => onGuessClick(person)}
          style={{
            pointerEvents: disabledPersons.includes(person) ? "none" : "auto",
            opacity: disabledPersons.includes(person) ? "0.2" : "1",
          }}
        />
      ))}
    </div>
  );
};

export default BoardGame;