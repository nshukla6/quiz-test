import React, {useState} from 'react';
import "../App.css";

const Text = ({ question: {question, correct_answer} , next}) => {

    const [answer, setAnswer] = useState("");

    const selectOptionHandler = (e) => {
        const ans = e.target.value;
        setAnswer(ans.toLowerCase());
    }

    const clickNext = (answer) => {
        setAnswer("");
        next(answer.trim() === correct_answer.toLowerCase());
    }


    return (
        <div>
            <h2 dangerouslySetInnerHTML = {{__html: question}}></h2>
            <input onChange={selectOptionHandler} value={answer} className="text-input" type="text" name={question} required  />
            <button className="btn" onClick={() => clickNext(answer)}>Next</button>
        </div>
    )
}

export default Text
