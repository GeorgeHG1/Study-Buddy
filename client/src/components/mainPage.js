import React, { useState, useEffect } from 'react';
import Flashcard from './card.js';

const flashcard = {
  'id': 0, 'question': "Who is gay?", 'answer': "Carl" 
}



function MainPage(props) {
    const [lectureText, setLectureText] = useState("");

    const getQuestions = async () => {
    console.log(lectureText)
    let body = {
      info:lectureText
    }

    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    var i = await fetch('http://localhost:4000/getQuestions', requestOptions)
    var r = await i.json()

    console.log(r)

    }

    return(
        <div className="container-fluid poppin">
        <div className="row align-items-center" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-12" style={{height:"0vh",verticalAlign: "middle",textAlign:"Center",padding:"0vh 5vw 0px 5vw"}}>
              <h1 style={{fontSize:45,fontWeight:700}}>Writing Buddy.</h1>
              <p
                style = {{width:"30vw", margin:"auto"}}
              >
                <b>WRITING BUDDY</b> is a study buddy that helps you study for your next quiz, test, or exam! Paste your lecture notes in the box 
                and it will generate a comprehensive list of questions that can help review and reinforce new material.
              </p>
              <br/>
                <button type="button" className="btn btn-success" onClick={getQuestions}>
                    Generate Questions
                </button>
                <br />
                <br />
                <div className="form-group" style={{height:"40vh", width:"60vw", margin: "auto"}}>
                    <textarea
                        value={lectureText}
                        onChange={(e)=>{setLectureText(e.target.value)}}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        style={{minHeight:"40vh", fontSize: 28, marginBottom: 100}}
                    >
                    </textarea>
                </div>
              <br/>
              <Flashcard flashcard={flashcard}/>
            </div>
        </div>
      </div>
    )
}

export default MainPage