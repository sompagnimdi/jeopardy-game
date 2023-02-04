import Question from "./Question";

export default function QuestionContainer(props) {
  return (
    <div className="button-container">
      <div className="outer button">
        <button className="button" onClick={() => props.showAnswerFn()}>
          {props.revealText}
        </button>
        <span></span>
        <span></span>
      </div>
      <div className="outer button">
        <button className="button" onClick={() => props.getQuestionFn()}>
          Get Question
        </button>

        <span></span>
        <span></span>
      </div>
    </div>
  );
}
