/*
 * @Author: Ada J
 * @Date: 2024-03-02 11:59:17
 * @LastEditTime: 2024-03-02 12:01:08
 * @Description: 
 */
import React from 'react';

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  );
}

export default Container;