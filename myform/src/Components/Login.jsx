import React, { useState } from 'react';

export function EmailInput() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <label>Email:</label>
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

  return (
    <div>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p>You entered: {password}</p>
    </div>
  );
}


