import { type ButtonHTMLAttributes } from "react";

export function Button({ text = "Click Me", ...props }: ButtonProps) {
  return <button {...props}>{text}</button>;
}

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  text?: string;
  easterEgg?: boolean;
}

export type { ButtonProps };
