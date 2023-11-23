import classes from "./Button.module.css";

export default function Button({
  type,
  text,
  onClick,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
  fontFamily,
}) {
  return (
    <div className={classes.container}>
      <button
        style={{ color, backgroundColor, fontSize, width, height, fontFamily }}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: "button",
  text: "Submit",
  backgroyndColor: "#e72929",
  color: "white",
  fontSize: "1.3rem",
  width: "12 rem",
  height: "3.5rem",
  fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
};
