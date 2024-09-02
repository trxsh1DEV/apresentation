import { HTMLAttributes, forwardRef, useId } from "react";
import "./style.css";

// Define um tipo específico para 'type' que inclui todos os tipos válidos de input
type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "url"
  | "tel"
  | "date"
  | "datetime-local"
  | "month"
  | "week"
  | "time"
  | "search"
  | "color"
  | "checkbox"
  | "radio"
  | "file"
  | "hidden"
  | "image"
  | "reset"
  | "submit"
  | "button";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  type?: InputType; // Agora o 'type' é limitado aos tipos válidos
  name?: string; // 'name' continua sendo uma string opcional
  label?: string;
  helperText?: string;
  hasError?: boolean;
  placeholder?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text", // 'type' padrão é 'text'
      name = "", // 'name' padrão é uma string vazia
      label = "\u00A0",
      helperText = "",
      placeholder,
      // hasError = false,
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;

    return (
      <div className="InputContent">
        <label className="Label" htmlFor={inputId}>
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          placeholder={placeholder}
          className={`InputStyle ${hasError ? "hasError" : ""}`}
          {...props}
        />
        {hasError && <p className="text-lg text-red-500 ">{helperText}</p>}
      </div>
    );
  }
);
