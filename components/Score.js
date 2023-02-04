import { useState } from "react";
import ScoreButton from "./ScoreButton";

export default function Score(props) {
  const [score, setScore] = useState(0);

  function handleClick(buttonType) {
    if (buttonType === "decrease") {
      setScore(score - props.points);
    } else if (buttonType === "increase") {
      setScore(score + props.points);
    } else {
      setScore(0);
    }
  }

  return (
    <div className="">
      <h2>
        Score: <span>{score}</span>
      </h2>
      <div className="button-container">
        <ScoreButton
          className="button"
          onClick={() => handleClick("decrease")}
          score={score}
          points={props.points}
          buttonName="Decrease"
        />
        <ScoreButton
          className="button"
          onClick={() => handleClick("increase")}
          score={score}
          points={props.points}
          buttonName="Increase"
        />
        <ScoreButton
          className="button"
          onClick={() => handleClick("reset")}
          score={score}
          buttonName="Reset"
        />
      </div>
    </div>
  );
}
