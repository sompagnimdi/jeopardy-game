export default function ScoreButton(props) {
  return (
    <div className="outer button">
      {" "}
      <button className="button" onClick={() => props.onClick()}>
        {props.buttonName}
      </button>
    </div>
  );
}
