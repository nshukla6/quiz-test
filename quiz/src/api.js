const URL = "http://localhost:4000/api/questions";



export const getQuestions = async() => {

    const response = await fetch(URL);
    const questions =  await response.json();
    return questions;

}