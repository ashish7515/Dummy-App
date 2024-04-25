import React, { useState } from 'react';
import axios from 'axios';
import "./userform.css"

const UserDataForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [skill, setSkill] = useState('');

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (username.length < 4 || username.length > 32) {
      alert('Username must be between 4 - 32 characters.');
      isValid = false;
    }

    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialCharRegex.test(password)) {
      alert('Password must contain at least one special character.');
      isValid = false;
    }

    return isValid;
  };

  const reset = () => {
    setUsername("");
    setPassword("");
    setGender("");
    setSkill("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3001/users', {
          username,
          password,
          gender,
          skill
        });

        if (response.status === 201) {
          alert('User created successfully!');
        } else {
          alert('An error occurred, Try again!');
        }

      } catch (error) {
        console.error(error);
        alert('An error occurred');
      }
    }
  };

  return (
    <div className="form-container"> {/* Add styling if needed */}
      <h2>User Data</h2>
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
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-options"> {/* Style as needed */}
            <label>
              <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="skillSelect">Skill:</label>
          <select id="skillSelect" value={skill} onChange={handleSkillChange}>
            {/* <option value="">Choose a skill...</option> */}
            <option value="JS">JavaScript (JS)</option>
            <option value="React">React</option>
            <option value="API">API</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={reset}>Reset</button>
      </form>
    </div>
  );
};

export default UserDataForm;