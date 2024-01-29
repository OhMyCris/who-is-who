// import React from "react";

const QuestionsBoard = ({ questions, onAnswerClick, selectedPerson }) => {
    const simulateCorrectAnswerClick = (question) => {
        // Obten la respuesta correcta para la pregunta actual
        const correctAnswer = selectedPerson ? selectedPerson[question.key] : null;
    
        // Llama a la función de manejo de clics con la respuesta correcta
        if (correctAnswer !== null) {
          onAnswerClick(question.key, correctAnswer);
        }
      };

  return (
    <div data-function="questionsBoard">
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.title}</h2>
          {question.questions.map((answer, answerIndex) => (
            <button
              key={answerIndex}
              onClick={() => simulateCorrectAnswerClick(question)}
            >
              {answer}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuestionsBoard;