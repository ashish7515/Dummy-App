import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', {
            username,
            password,
          });

          if (response.status === 201) {
            alert('You are logged in successfully!');
            window.location.href = '/profile'; 

          } else {
            alert('An error occured!');  
          }
        } catch (error) {
            console.error(error);
            alert('Incorrect username or password!'); 
        }
        
    };


  return (
    <div className="form-container"> {/* Add styling if needed */}
      <h2>Login</h2> 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login