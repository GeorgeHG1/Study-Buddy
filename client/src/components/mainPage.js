import React, { useState, useEffect } from 'react';
import Flashcard from './card.js';


function MainPage(props) {
    const [lectureText, setLectureText] = useState("");
    const [loading, setLoading] = useState(false);
    const [cards,setCards] = useState([])

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
    setLoading(true)
    var i = await fetch('http://localhost:4000/getQuestions', requestOptions)
    var r = await i.json()

    console.log(r)
    setCards([])
    setCards(r.message)
    setLoading(false)


    }

    return(
        !loading?
        (
        <div className="container-fluid poppin">
        <div className="row align-items-center" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-12" style={{height:"0vh",verticalAlign: "middle",textAlign:"Center",padding:"0vh 5vw 0px 5vw"}}>
              <h1 style={{fontSize:45,fontWeight:700}}>Study Buddy</h1>
              <br/>
                <p></p>
                <div className="form-group" style={{height:"40vh", width:"60vw", margin: "auto"}}>
                    <textarea
                        value={lectureText}
                        onChange={(e)=>{setLectureText(e.target.value)}}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        style={{minHeight:"40vh", fontSize: 14, marginBottom: 100}}
                    >
                    </textarea>
                </div>
                <br/>
                <button type="button" className="btn btn-success" onClick={getQuestions}>
                    Generate Questions
                </button>
                <br/>
                <br/>
              <br/>
              <div className="card-columns" style={{"column-count": "3"}}>
              {cards.map((item,i) => <Flashcard flashcard={item} fr={true}/>)}
              </div>
              {/* {cards.toString()} */}

              

            </div>
        </div>
      </div>)
      :
      (<div className="spinner-border" style={{"margin":"40vh 48vw"}}role="status">
        <span className="sr-only">Loading...</span>
      </div>)
    )
}

export default MainPage