interface Style {
  color: "primary" | "secondary";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  variant: "contained" | "outlined" | "text";
}

interface ButtonProps {
  label: string;
  color?: Style["color"];
  size?: Style["size"];
  variant?: Style["variant"];
  disabled?: boolean;
}

SampleButton.defaultProps = {
  color: "primary",
  size: "md",
  variant: "contained",
  disabled: false,
};

export default function SampleButton(props: ButtonProps) {
  const { label, color, size, disabled, variant } = props;

  return (
    <button disabled={disabled} className={`btn ${color} ${size} ${variant}`}>
      {label}
    </button>
  );
}
