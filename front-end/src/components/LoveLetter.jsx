// src/components/LoveLetter.jsx
import React, { useState } from "react";
import axios from "axios";

const LoveLetter = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [letter, setLetter] = useState("");

  const generateLoveLetter = async () => {
    const prompt = `Write a romantic love letter for ${name}. Message: ${message}`;
    
    try {
      const response = await axios.post("https://api.openai.com/v1/completions", {
        model: "text-davinci-003",
        prompt,
        max_tokens: 100,
      }, {
        headers: { "Authorization": `Bearer YOUR_OPENAI_API_KEY` }
      });

      setLetter(response.data.choices[0].text);
    } catch (error) {
      console.error("Error generating love letter", error);
    }
  };

  return (
    <div className="love-letter">
      <h2>💌 AI Love Letter Generator</h2>
      <input type="text" placeholder="Enter your love's name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Enter a short message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={generateLoveLetter}>Generate Love Letter</button>
      {letter && <p className="generated-letter">{letter}</p>}
    </div>
  );
};

export default LoveLetter;
