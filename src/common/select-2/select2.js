import React from 'react';

const CSelect = ({ options, value, onChange, placeholder }) => {
  return (
    <select value={value} onChange={onChange}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CSelect;
