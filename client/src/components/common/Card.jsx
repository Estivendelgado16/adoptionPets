import "./Card.css";

function Card({ className, children, tone = "default", as: Component = "div" }) {
  const classes = ["card", `card--${tone}`, className].filter(Boolean).join(" ");
  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}

export function CardHeader({ className, children }) {
  const classes = ["card__header", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}

export function CardBody({ className, children }) {
  const classes = ["card__body", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}

export function CardFooter({ className, children }) {
  const classes = ["card__footer", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}

export default Card;
