import React, { useState } from 'react';
import "../App.css"

const Multiple = ({ question:{ question, incorrect_answers, correct_answer }, next }) => {

    const options = [...incorrect_answers, correct_answer];
    const [answer, setAnswer] = useState("");

    const selectOptionHandler = (e) => {

        const ans = e.target.value;
        setAnswer(ans);
    }

    const clickNext = (answer) => {
        setAnswer("");
        next(answer === correct_answer);
    }

    return (
        <div>
            <h2 dangerouslySetInnerHTML = {{__html: question}}></h2>
            {
                options.map(option => (
                    <div className="options" key={option}>
                        <input 
                            checked={option === answer} 
                            onChange={selectOptionHandler} 
                            type="radio" 
                            id={option} 
                            name={option} 
                            value={option} 
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            }
            <button className="btn" onClick={() => clickNext(answer)}>Next</button>

        </div>
    )
}

export default Multiple
