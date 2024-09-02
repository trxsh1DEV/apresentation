import React, { useId } from "react";

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

const InputCommom: React.FC<TypePropsInput> = ({
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
  const inputId = useId();

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
        value={value || ""} // Use a prop value
        defaultValue={defaultValue}
        readOnly={readOnly}
        onClick={onClick}
        onChange={onChange} // Handle change externally
        placeholder={placeholder}
        className={`${readOnly ? "bg-slate-100" : "bg-slate-0 dark:bg-slate-800"} rounded-md border border-input dark:bg-background px-3 py-2 text-xl ring-offset-background placeholder:text-muted-foreground ring-2 ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`}
      />
    </div>
  );
};

export default InputCommom;
