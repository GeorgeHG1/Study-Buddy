import React, { useState } from 'react'

const Flashcard = ({ flashcard,fr }) => {
    const [front, setFront] = useState(fr)

    return (
        <div>
            <div className="card" onClick={()=>setFront(!front)}>
            <div className="card-body" style={{"minHeight":"17rem","paddingTop": "4rem",
"paddingBottom": "4rem"}}>
                <h5 className="card-title">
                {front?"Q: "+flashcard.question:"A: "+flashcard.ans}
                </h5>
            </div>
            </div>
        </div>
    )
}

export default Flashcard
