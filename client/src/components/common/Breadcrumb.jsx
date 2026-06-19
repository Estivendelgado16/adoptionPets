import "./Breadcrumb.css";

function Breadcrumb({ items = [] }) {
  return (
    <ol className="breadcrumb">
      {items.map((item, index) => (
        <li key={item.label || index}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span aria-hidden="true">›</span>}
        </li>
      ))}
    </ol>
  );
}

export default Breadcrumb;
