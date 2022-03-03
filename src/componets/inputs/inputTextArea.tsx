import React, { useState, useEffect } from 'react';

function InputTextArea(props: any) {
  const { labelText, placeholder, value, id, onChange, newRef, rows, noChange } = props;
  return (
    <label className="block">
      {labelText && <span className="text-gray-700 text-base font-thin italic">{labelText}</span>}
      <textarea
        className="  mt-1 block  w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
        rows={rows ? rows : 3}
        value={value}
        onChange={event => {
          if (onChange && !noChange) {
            onChange(id, event);
          }
        }}
        ref={newRef}
        placeholder={placeholder}
        disabled={noChange}
      ></textarea>
    </label>
  );
}

export default InputTextArea;
