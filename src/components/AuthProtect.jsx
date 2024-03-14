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
  const authStatus = useSelector(state => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if(authentication && authStatus !== authentication){
      navigate('/login');
    }else if(!authentication && authStatus !== authentication){
      navigate('/')
    }
    setLoader(false);
  }, [authentication, authStatus, navigate])

  return loader ? null : <>{children}</>
}

export default AuthProtect;