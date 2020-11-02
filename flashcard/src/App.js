import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Flashcardlist from './components/Flashcardlist';
import '../src/styles.css';
import axios from 'axios';


function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories)
      })

  }, [])

  // useEffect(() => {

  // }, [])


  function decodeString(str) {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = str
    return textarea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .get('https://opentdb.com/api.php', {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value
        }
      })
      .then(res => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer)
            const options = [
              ...questionItem.incorrect_answers.map(a => decodeString(a)),
              answer
            ]

            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - .5)
            }
          }))
      })
  }

  return (
    <>

      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name} </option>

            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount" >Number of question</label>
          <input type="number" id="amount" min="1" setp="1" defaultValue={10} ref={amountEl}></input>
        </div>

        <div className="form-group">
          <button className="btn">Generate</button>
        </div>

      </form>

      <div className="container ">

        <Flashcardlist flashcards={flashcards} />
      </div>
    </>);


}



export default App;
