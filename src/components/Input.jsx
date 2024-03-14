/*
 * @Author: Ada J
 * @Date: 2024-03-02 12:03:06
 * @LastEditTime: 2024-03-02 12:10:37
 * @Description: f
 */
import React, { useId } from 'react';

function Input({
  label, 
  type = 'text',
  className= "",
  ...props
}, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>
      )}
      <input 
      ref={ref}
      type={type}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      {...props}
      id={id} />
    </div>
  );
}

export default React.forwardRef(Input);