import React from 'react';

export default function Select({ children, ...props }){
  return <select className="input" {...props}>{children}</select>;
}