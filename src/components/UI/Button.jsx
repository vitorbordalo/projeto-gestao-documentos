import React from 'react';

export default function Button({ className = '', ...props }) {
  return <button {...props} className={`btn ${className}`} />;
}