import "./PageHeader.css";

function PageHeader({
  title,
  subtitle,
  breadcrumb,
  action,
}) {
  return (
    <header className="page-header">
      <div className="page-header__left">
        {breadcrumb && (
          <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
            {breadcrumb}
          </nav>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {action && (
        <div className="page-header__action">
          {action}
        </div>
      )}
    </header>
  );
}

export default PageHeader;
