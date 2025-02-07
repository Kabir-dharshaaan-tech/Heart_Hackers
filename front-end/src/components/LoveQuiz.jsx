
import React, { useState } from "react";

const questions = [
  { question: "How do you express love?", options: ["Gifts", "Words", "Actions", "Time"] },
  { question: "Favorite romantic date?", options: ["Beach", "Movie", "Dinner", "Adventure"] },
  { question: "What is most important in a relationship?", options: ["Trust", "Communication", "Passion", "Loyalty"] }
];

const LoveQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const calculateResult = () => {
    const score = Object.values(answers).filter(Boolean).length;
    if (score > 2) setResult("You're a true romantic! ❤️");
    else setResult("You love in your own unique way! 💕");
  };

  return (
    <div className="love-quiz">
      <h2>💖 Love Compatibility Quiz</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map(option => (
            <button key={option} onClick={() => setAnswers({ ...answers, [index]: option })}>
              {option}
            </button>
          ))}
        </div>
      ))}
      <button onClick={calculateResult}>See Results</button>
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default LoveQuiz;
