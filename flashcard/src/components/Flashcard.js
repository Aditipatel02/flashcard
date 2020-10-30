import React, { useState } from 'react'
import Flashcardlist from './Flashcardlist'

export default function Flashcard({ flashcard }) {
    const [flip, setflip] = useState(false)
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => { setflip(!flip) }}
        >
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back">{flashcard.ans}</div>
           
        </div>
    )
}
