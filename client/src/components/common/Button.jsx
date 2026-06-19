import "./Button.css";

const VARIANTS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  pill: "btn-pill",
};

function Button({
  variant = "primary",
  className,
  children,
  ...props
}) {
  const classes = ["btn", VARIANTS[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
