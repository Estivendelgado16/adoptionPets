import "./Section.css";

function Section({ className, children }) {
  const classes = ["page-section", className].filter(Boolean).join(" ");
  return <section className={classes}>{children}</section>;
}

export default Section;
