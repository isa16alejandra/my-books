import React, { useState, useEffect } from 'react';

function InputText(props: any) {
  const { labelText, placeholder, value, id, onChange, newRef, type, noChange } = props;
  return (
    <label className="block">
      {labelText && <span className="text-base font-thin italic">{labelText}</span>}
      <input
        type={type || 'text'}
        className="mt-0 block w-full bg-transparent px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-purple200"
        placeholder={placeholder}
        value={value}
        onChange={event => {
          if (onChange && !noChange) {
            onChange(event);
          }
        }}
        ref={newRef}
        disabled={noChange}
      />
    </label>
  );
}

export default InputText;
