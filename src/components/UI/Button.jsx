import React from 'react';
import clsx from 'clsx';

export default function Button({ as:Tag='button', className, ...props }) {
  return <Tag className={clsx('btn btn-primary', className)} {...props} />;
}