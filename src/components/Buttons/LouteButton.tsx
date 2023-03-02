import { useRouter } from "next/router";

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
  path?: string;
}

LouteButton.defaultProps = {
  color: "primary",
  size: "md",
  variant: "contained",
  disabled: false,
};

export default function LouteButton(props: ButtonProps) {
  const { label, color, size, disabled, variant, path } = props;
  const router = useRouter();

  const goPath = () => {
    if (path) {
      path == "prev" ? router.back() : router.push(path);
    }
  };

  return (
    <button
      disabled={disabled}
      className={`btn ${color} ${size} ${variant}`}
      onClick={(e) => {
        e.preventDefault();
        goPath();
      }}
    >
      {label}
    </button>
  );
}
