import React, { useState } from 'react';
import '../Components/Sign.css'

export function EmailInput() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='Email'>
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <p>You entered: {email}</p>
    </div>
  );
}


export function PasswordInput() {
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setPassword(event.target.value);
  };
   
  const handleLogin = () => {
    console.log("Login :",password)
  }

  return (
    <div className='pass'>
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"   
      /> 
      <div className='button'>
      <button onClick={handleLogin}>Login</button>
      </div> 
    </div>
    
  );
  
}


