import React from 'react';

function Input({ id, type, value, onChange, className }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;