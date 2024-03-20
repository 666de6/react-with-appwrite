import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice'
import Logo from './Logo';
import { Input, Button } from '@/components';

function Signup(props) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const create = async (data) => {
    try {
      setError('');
      const session = await authService.createAccount(data);
      console.log({session});
      if(session){
        const userInfo = await authService.getCurrentUser();
        userInfo && dispatch(login({userData: userInfo}));
        navigate('/'); 
      }

    } catch (error) {
      setError(error);
    }
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center">
              <span className="inline-block w-full max-w-[100px]">
                  <Logo width="100%" />
              </span>
          </div>
          <h2 className="text-center text-black/60 text-2xl font-bold leading-tight">Sign up to create account</h2>
          <p className="mt-2 text-center text-base text-black/60">
              Already have an account?&nbsp;
              <Link
                  to="/login"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                  Sign In
              </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(create)} className="mt-8">
              <div className="space-y-5">
                  <Input
                      {...register("name", { required: true })}
                      label="Full Name : "
                      placeholder="Full Name"
                  />
                  <Input
                      {...register("email", {
                          required: true,
                          
                      })}
                      label="Email : "
                      placeholder="Email Address"
                      type="email"
                  />
                  <Input
                      {...register("password", { required: true })}
                      label="Password : "
                      type="password"
                      placeholder="Password"
                  />
                  <Button type="submit" className="w-full">
                      Create Account
                  </Button>
              </div>
          </form>
      </div>
  </div>
  );
}

export default Signup;