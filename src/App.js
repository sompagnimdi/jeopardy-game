import "./styles.css";
import { useState } from "react";
import Score from "../components/Score";
import QuestionContainer from "../components/QuestionContainer";
import Question from "../components/Question";
const API_PATH = "https://jservice.io/api/random";

export default function App() {
  const [questionData, setQuestionData] = useState([]);
  const [points, setPoints] = useState(0);
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [revealText, setRevealText] = useState("Click to Reveal Answer");

  const getQuestion = async () => {
    try {
      const response = await fetch(API_PATH);
      setQuestionData(await response.json());
      setPoints(questionData[0].value);
      setCategory(questionData[0].category.title);
      setQuestion(questionData[0].question);
      setAnswer(questionData[0].answer);
      setRevealText("Click to Reveal Answer");
    } catch (e) {
      console.error("Question did not load successfully. Try again.");
    }
  };

  function showAnswer() {
    setRevealText(answer);
  }

  return (
    <div className="App">
      <h1>Welcome to the world Jeopardy game!</h1>
      <Score points={points} />
      <h2>Let's play!</h2>
      <QuestionContainer
        getQuestionFn={() => getQuestion()}
        showAnswerFn={() => showAnswer()}
        category={category}
        points={points}
        question={question}
        revealText={revealText}
      />
      <Question points={points} category={category} question={question} />
    </div>
  );
}
