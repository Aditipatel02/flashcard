import React, { useState, useEffect } from 'react';
import './App.css';
import Flashcardlist from './components/Flashcardlist';
import '../src/styles.css';
import axios from 'axios';


function App() {
  const [flashcards, setFlashcards] = useState([])
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = questionItem.correct_answer
            const options = [...questionItem.incorrect_answers, answer]
            return {
              id: `${index}-${Date.now()}`,
              question: questionItem.question,
              answer: answer,
              options: options.sort(() => Math.random() - .5)
            }
          }))
        })
      }, [])

    return (
      <Flashcardlist flashcards={flashcards}></Flashcardlist>
    );
  }



export default App;
