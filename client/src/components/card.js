import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    const MAXWIDTH = {
        maxWidth: '18rem'
    };
    const BORDER = {
        border: '1px solid #e5e5e5'
    };

    return (
        <div>
            <div className="card-wrapper">
                <div id="card-1" className="card card-rotating text-center">

                    <div className="face front">
                        <div className="card-body">
                            <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                            <p className="font-weight-bold blue-text">Web developer</p>
                            <a className="rotate-btn" data-card="card-1"><i className="fas fa-redo-alt"></i> Click here to rotate</a>
                        </div>
                    </div>

                    <div className="face back">
                        <div className="card-body">

                            <h4 className="font-weight-bold mb-0">About me</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat tenetur odio suscipit non commodi vel
                                    eius veniam maxime?
                                        <ul className="list-inline py-2">
                                            <li className="list-inline-item"><a className="p-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a className="p-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a className="p-2 fa-lg gplus-ic"><i className="fab fa-google-plus-g"></i></a></li>
                                            <li className="list-inline-item"><a className="p-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                        <a className="rotate-btn" data-card="card-1"><i className="fas fa-undo"></i> Click here to rotate back</a>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`card flip-card border-0 mb-3 ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} style={MAXWIDTH}>
                <div className="front" style={BORDER}>
                    <div className="card-header">Question</div>
                    <div className="card-body text-dark">
                        <p className="card-text">{flashcard.question}</p>
                    </div>
                </div>
                <div className="back" style={BORDER}>
                    <div className="card-header">Answer</div>
                    <div className="card-body text-dark">
                        <p className="card-text">{flashcard.answer}</p>
                    </div>
                </div>
            </div> */}
            {/* <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
                <div className="front">
                    {flashcard.question}
                </div>
                <div className="back">{flashcard.answer}</div>
            </div> */}
        </div>
    )
}

export default Flashcard
