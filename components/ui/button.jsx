import React from "react";

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

