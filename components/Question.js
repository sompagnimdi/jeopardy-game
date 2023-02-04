export default function Question(props) {
  return (
    <div>
      <h3>
        Category: <span>{props.category}</span>
      </h3>
      <h3>
        Points: <span>{props.points}</span>
      </h3>
      <h3>
        Question: <span>{props.question}</span>
      </h3>
    </div>
  );
}
