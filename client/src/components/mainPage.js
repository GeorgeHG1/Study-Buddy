import React, { useState } from 'react';

function MainPage(props) {
    const [storyText, setStoryText] = useState("");

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
                <button type="button" className="btn btn-success">
                    Generate Questions
                </button>
                <br />
                <br />
                <div className="form-group" style={{height:"40vh", width:"60vw", margin: "auto"}}>
                    <textarea
                        value={storyText}
                        onChange={(e)=>{setStoryText(e.target.value)}}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        style={{minHeight:"40vh", fontSize: 28, marginBottom: 100}}
                    >
                    </textarea>
                </div>
              <br/>
            </div>
        </div>
      </div>
    )
}

export default MainPage