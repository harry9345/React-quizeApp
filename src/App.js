import React, { useState } from "react";
import "./App.css";

function App() {
  const qustions = [
    {
      id: 10,
      questionText: "where is the iran capital",
      answersOptions: [
        { answerText: "Tabriz", isCorrect: false },
        { answerText: "Tehran ", isCorrect: true },
        { answerText: "Mashtah ", isCorrect: false },
        { answerText: "Qom", isCorrect: false },
      ],
    },
    {
      id: 1,
      questionText: "Who is CEO of Tesla",
      answersOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Amir Tehrani ", isCorrect: false },
        { answerText: "Hamed Rajabi ", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
      ],
    },
    {
      id: 2,
      questionText: "What is  2 * 5 ",
      answersOptions: [
        { answerText: "25", isCorrect: false },
        { answerText: "90 ", isCorrect: false },
        { answerText: "68 ", isCorrect: false },
        { answerText: "10", isCorrect: true },
      ],
    },
    {
      id: 3,
      questionText: "Who owns the apple",
      answersOptions: [
        { answerText: "Jobs", isCorrect: true },
        { answerText: "khomeini ", isCorrect: false },
        { answerText: "rafsanjani ", isCorrect: false },
        { answerText: "google", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswersOptionsClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < qustions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTryAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };
  return (
    <>
      {showScore ? (
        <div className="App">
          <div className="FinalSection">
            <h1>Score</h1>
            <p>
              Your Score is {score} out of {qustions.length}
            </p>
            <a onClick={handleTryAgain}> Try Again</a>
          </div>
        </div>
      ) : (
        <div className="App">
          <div className="QuestionSection">
            <div className="QuestionCount">
              <span>Question {currentQuestion + 1}</span> / {qustions.length}
            </div>
            <div className="QuestionText">
              {qustions[currentQuestion].questionText}
            </div>
          </div>
          <div className="AnswerSection">
            {qustions[currentQuestion].answersOptions.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswersOptionsClick(answer.isCorrect)}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
