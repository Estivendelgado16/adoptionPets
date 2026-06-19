import "./Tag.css";

function Tag({ children, tone = "default" }) {
  const classes = ["tag", `tag--${tone}`].join(" ");
  return <span className={classes}>{children}</span>;
}

export default Tag;
