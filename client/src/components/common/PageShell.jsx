import "./PageShell.css";

function PageShell({ children, className }) {
  const classes = ["page-shell", className].filter(Boolean).join(" ");
  return (
    <main className={classes}>
      {children}
    </main>
  );
}

export default PageShell;
