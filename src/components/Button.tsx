import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`px-12 md:px-16 py-3 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-[#981D1F] text-[#FFEEEF] hover:bg-[#7A1618] focus:ring-[#981D1F] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`px-12 md:px-16 py-3 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-white text-[#1A1A1A] border border-[#D4D4D4] hover:bg-[#F5F5F5] focus:ring-[#D4D4D4] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const GhostButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`px-12 md:px-16 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-transparent text-[#4A4A4A] hover:bg-[#F5F5F5] focus:ring-[#D4D4D4] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const BlackButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`px-12 md:px-16 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-black text-white hover:bg-[#1A1A1A] focus:ring-black ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, GhostButton, BlackButton };
