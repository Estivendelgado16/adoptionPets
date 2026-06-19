import "./IconButton.css";

function IconButton({ className, children, ...props }) {
  const classes = ["icon-button", className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton;
