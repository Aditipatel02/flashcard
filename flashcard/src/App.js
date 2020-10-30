import React,{useState} from 'react';
import './App.css';
import Flashcardlist from './components/Flashcardlist';
import '../src/styles.css';

function App() {
  const [flashcards,setFlashcards]=useState(SAMPLE_FLASHCARDS)
  return (
   <Flashcardlist flashcards={flashcards}></Flashcardlist>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question: '2+2 is?',
    ans:'4',
    options:[
      '2','3','4','5'
    ]
  },
  {
    id:2,
    question: '2+3 is?',
    ans:'5',
    options:[
      '2','3','4','5'
    ]
  }

]

export default App;
