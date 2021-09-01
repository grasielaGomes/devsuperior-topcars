import { ReactElement } from "react";

interface CardProps {
  children: ReactElement;
  color: string;
  hasShadow: boolean;
}

export function Card({ children, color, hasShadow }: CardProps) {
  return (
    <div
      className={`card rounded ${
        hasShadow ? "shadow" : "shadow-none"
      } text-center ${color}`}
    >
      {children}
    </div>
  );
}
