"use client";

import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  text = "Let's connect",
  icon,
  iconPosition = "right",
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "relative overflow-hidden rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group transform hover:scale-102";

  const variants = {
    primary: "bg-white text-gray-900 hover:bg-gray-100 shadow-md",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40",
  };
  const content = children || (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-19">{icon}</span>
      )}
      {text && <span className="relative z-10">{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-y-1">{icon}</span>
      )}
    </>
  );

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {content}
    </button>
  );
}
