import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };
  const Handleform = (e)=>{
    e.preventDefault();
    console.log(data)
    if(localStorage.setItem('userdata',JSON.stringify(email))){
        window.location.href="/movies/:id"
    }}

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl text-gray-600 font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        <p className='pt-6 font-bold text-gray-700'>if you dont have an account <a href='/Signup' className='text-blue-500 bg-gray-400 p-2 rounded-lg'>Signup </a></p>
      </form>
    </div>
  );
};

export default Login;
