import React, { useId, useState } from "react";

interface TypePropsInput {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  label?: string;
  value?: string;
  readOnly?: boolean;
  className?: string;
  defaultValue?: string;
  id?: string;
}

const InputComponent: React.FC<TypePropsInput> = ({
  type = "text",
  placeholder,
  label,
  className,
  readOnly,
  value,
  defaultValue,
  id,
  onClick,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(value || ""); // Estado interno
  const inputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value); // Atualiza o valor interno
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex justify-between text-[1.4rem] relative ${className}`}>
      {label && (
        <label
          className="block text-2xl font-medium text-gray-700 dark:text-gray-300"
          htmlFor={id || inputId}
        >
          {label}
        </label>
      )}
      <input
        id={id || inputId}
        type={type}
        value={internalValue}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onClick={onClick}
        onChange={handleChange}
        placeholder={placeholder}
        // className={`block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 px-3 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
        className={`${readOnly ? "bg-slate-100" : "bg-slate-0 dark:bg-slate-800"} rounded-md border border-input dark:bg-background px-3 py-2 text-xl ring-offset-background placeholder:text-muted-foreground ring-2 ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`}
      />
    </div>
  );
};

export default InputComponent;
