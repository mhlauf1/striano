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
}) => {
  return (
    <button
      className={`px-12 md:px-16 py-3 w-full cursor-pointer  md:w-auto rounded font-medium transition-colors duration-200  focus:ring-2  disabled:opacity-50 bg-[#981D1F] text-[#FFEEEF] hover:bg-[#ca3e40] focus:ring-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`px-12 md:px-16 py-3 w-full duration-300 md:w-auto cursor-pointer hover:text-neutral-800 rounded font-medium transition-colors focus:ring-2  disabled:opacity-50 bg-transparent text-white border border-white/30 hover:bg-white focus:ring-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const GhostButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`px-12 md:px-16 rounded font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-transparent text-[#4A4A4A] hover:bg-[#F5F5F5] focus:ring-[#D4D4D4] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BlackButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`px-12 md:px-16 rounded  py-3 font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-black text-white hover:bg-[#1A1A1A] focus:ring-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, GhostButton, BlackButton };
