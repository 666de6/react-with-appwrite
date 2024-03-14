/*
 * @Author: Ada J
 * @Date: 2024-03-02 12:03:06
 * @LastEditTime: 2024-03-02 12:05:39
 * @Description: 
 */
import React from 'react';

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
return (
  <button
  className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
  {...props}
  > {children} </button>
)
}

export default Button;