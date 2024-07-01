import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAuth from './useAuth';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const { registerUser, loginUser } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().when('currState', {
      is: 'Sign Up',
      then: yup.string().required('Name is required'),
    }),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    acceptTerms: yup.bool().oneOf([true], 'Accepting Privacy Policy is required')
  });

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: yupResolver(schema),
    context: { currState }
  });

  const onSubmit = data => {
    console.log('Form submitted:', data);
    if (currState === 'Sign Up') {
      registerUser({ name: data.name, email: data.email, password: data.password });
      setShowLogin(false);
    } else {
      const user = loginUser(data.email, data.password);
      if (user) {
        alert('Login successful!');
        setShowLogin(false);
      } else {
        setError('email', { type: 'manual', message: 'Invalid email or password' });
      }
    }
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popups-inputs">
          {currState === 'Sign Up' && (
            <div>
              <input type="text" placeholder='Your name' {...register('name')} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          )}
          <div>
            <input type="email" placeholder='Your email' {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <input type="password" placeholder='Your password' {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>
        <button>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" {...register('acceptTerms')} />
          <p>I am accepting Privacy Policy</p>
          {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}
        </div>
        {currState === 'Login' ? (
          <p onClick={() => setCurrState("Sign Up")}>Create a new account? <span>Click here</span></p>
        ) : (
          <p onClick={() => setCurrState("Login")}>Already have an account? <span>Login Here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
