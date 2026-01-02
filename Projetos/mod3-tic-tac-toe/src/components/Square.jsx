import './Square.css'

function Square({ value, onClick }) {
  let style = null;

  if (value === "X") {
    style = "square-x";
  } else if (value === "O") {
    style = "square-o";
  } else {
    style = "square";
  }

  return (
    <div>
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square