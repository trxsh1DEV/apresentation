import { FC, ReactNode } from "react";

interface CustomH1Props {
  children: ReactNode;
  className?: string;
}

export const H1Custom: FC<CustomH1Props> = ({ children, className }) => {
  return (
    <h1
      className={`text-4xl font-bold text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent py-0.5 ${className}`}
    >
      {children}
    </h1>
  );
};
