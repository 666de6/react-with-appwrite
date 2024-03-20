/*
 * @Author: Ada J
 * @Date: 2024-02-29 11:09:13
 * @LastEditTime: 2024-02-29 11:49:24
 * @Description: 
 */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function AuthProtect({children, authentication = true}) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    const authStatus = JSON.parse(sessionStorage.getItem('logedIn')) || false;
    console.log({authStatus})
    console.log({authentication})
    if(authentication && authStatus !== authentication){
      navigate('/login');
    }else if(!authentication && authStatus !== authentication){
      navigate('/')
    }
    setLoader(false);
  }, [authentication, navigate])

  return loader ? (
    <>
      <div className='h-screen flex justify-center align-middle text-2xl font-bold'>...loading</div>
    </>
  ) : <>{children}</>
}

export default AuthProtect;