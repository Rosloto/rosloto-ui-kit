import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
}

export const Input = ({
  label,
  placeholder,
  value,
  type = 'text'
}: InputProps) => {
  return (
    <div className="rl-input-wrapper">
      {label && <label>{label}</label>}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
