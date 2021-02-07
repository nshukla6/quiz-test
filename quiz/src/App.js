import React, { useEffect, useState, useCallback } from 'react';
import { getQuestions } from "./api";
import Boolean from './components/Boolean';
import Multiple from './components/Multiple';
import Text from './components/Text';
import Summary from './components/Summary';

import "./App.css";


const NO_OF_QUESTIONS = 5;

const App = () => {

    const [questions, setQuestions] = useState([]);
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await getQuestions();
                const questions = response.results;
                setQuestions(questions);

            } catch (e) {
                console.log("Error Fetching Questions ", e);
            }

        }
        fetchQuestions();
    }, [setQuestions]);

    useEffect(() => {
        if (questions.length > 0) {
            randomQuestionGenerator();
        }

    }, [questions])

    const randomGenerator = (min, max) => {
        const result = [];
        for (let i = 0; i < NO_OF_QUESTIONS; i++) {
            const index = Math.floor(Math.random() * (max - min) + min);
            result.push(index);
        }
        return result;
    }
    const randomQuestionGenerator = useCallback(() => {
        const ques = [];
        const randomArray = randomGenerator(0, questions.length);
        for (let i = 0; i < randomArray.length; i++) {
            ques.push(questions[randomArray[i]]);
        }

        setRandomQuestions(ques);
    },[questions])

    const showQuestion = (question) => {
        if (question.type === "multiple") {
            return <Multiple question={question} next={clickNext} />
        } else if (question.type === "boolean") {
            return <Boolean question={question} next={clickNext} />
        } else if (question.type === "text") {
            return <Text question={question} next={clickNext} />
        }
    }

    const clickNext = (ans) => {
        setSummary(sum => [...sum,ans]);
    }

    const restartQuiz = () => {
        randomQuestionGenerator();
        setSummary([]);
    }

    return (
        <div className="question">
            {randomQuestions.length > 0 ? showQuestion(randomQuestions.shift()) : <Summary summary={summary} restart={restartQuiz} />}
        </div>
    )
}

export default App
