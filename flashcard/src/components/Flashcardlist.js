import React from 'react'
import Flashcard from './Flashcard';

export default function Flashcardlist(props) {
    const flashcards = props.flashcards;

    return (
        <div className="card-grid">
            {flashcards.map(flashcard =>{
return <Flashcard flashcard={flashcard} key={flashcard.id}></Flashcard>
            })
            }

        </div>
    )
}
