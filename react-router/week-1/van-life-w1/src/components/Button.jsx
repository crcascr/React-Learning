function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
      className={`button ${props.className}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
