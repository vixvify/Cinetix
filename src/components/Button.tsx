"use client";

import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "warning" | "danger";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  type = "button",
  disabled,
  variant = "primary",
  onClick,
  className,
}: Props) {
  const base = "px-4 py-2 rounded-lg transition";
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed",
    secondary: "bg-zinc-700 hover:bg-zinc-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(base, styles[variant], className)}
    >
      {children}
    </button>
  );
}
