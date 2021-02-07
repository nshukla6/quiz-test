import React from 'react';
import "../App.css";

const Summary = ({ restart, summary=[] }) => {
    
    const correct = summary.reduce((acc, cv) => (acc+cv),0);
    const wrong = summary.length - correct;
    const total = summary.length;
    const percentage = Math.trunc(correct*100/total)

    return (
        <div>
            <h2>Summary</h2>

            <div className="summary-attributes">Correct: <span className="summary-value">{correct}</span></div>
            <div className="summary-attributes">Wrong: <span className="summary-value">{wrong}</span></div>
            <div className="summary-attributes">Question answered: <span className="summary-value">{total}</span></div>
            <div className="summary-attributes">Final Score: <span className="summary-value">{percentage}%</span></div>

            <button className="btn quiz" onClick={restart}>Restart Quiz</button>
            
        </div>
    )
}

export default Summary
