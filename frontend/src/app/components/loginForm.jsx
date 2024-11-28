"use client"
import React, {useState} from 'react';
import {AuthContext} from "../context/user";
import Link from "next/link";
import {useContext} from "react"
import {useRouter} from "next/navigation";
import NavBar from "../components/navBar";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const LoginForm = () => {
    const context = useContext(AuthContext);

    if (!context) {
      throw new Error("AuthContext is not available");
    }

    const { isLoggedIn, login } = context;

  const router = useRouter();

  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    try {
      if (!username || !password) {
        alert('Please enter both username and password.');
        throw Error;
      }
      // Attempt login
      await login(username, password);
      router.push('/');
    } catch (err) {
      setUsername("");
      setPassword("");
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e6d0f5',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
      <div>
        <NavBar></NavBar>
        <div style={containerStyle}>
          <div style={formStyle}>
            <h2 style={titleStyle}>Login</h2>
            <form onSubmit={handleSubmit}>
              <label className="text-lg text-black font-medium mb-1">Username</label>
              <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"/>
              <label className="text-lg text-black font-medium mb-1">Password</label>
              <div className="relative flex items-center mb-4">
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"
                    aria-label="Password"
                />
                <div
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                      <FaEyeSlash className="text-gray-600"/>
                  ) : (
                      <FaEye className="text-gray-600"/>
                  )}
                </div>
              </div>
              <button type="submit" style={buttonStyle}>
                Log In
              </button>
            </form>
            <p>New User? <Link className="text-blue-700 underline" href="../registration">Create an Account</Link></p>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;