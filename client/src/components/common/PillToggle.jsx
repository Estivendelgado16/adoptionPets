import Button from "./Button";

function PillToggle({
  options,
  active,
  onChange,
  className,
}) {
  return (
    <div className={className}>
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <Button
            key={option.value}
            variant="pill"
            className={isActive ? "btn-pill is-active" : "btn-pill"}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}

export default PillToggle;
