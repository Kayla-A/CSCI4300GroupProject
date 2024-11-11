import React from 'react';

const LoginForm = () => {
   
    const containerStyle = {
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: '20px',
      backgroundColor: '#e6d0f5', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        color: '#333', 
      };

      const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      };
    
      const inputStyle = {
        padding: '0.75rem',
        borderRadius: '10px',
        border: '1px solid #ccc',
        outline: 'none',
        fontSize: '1rem',
        width: '100%',
      };

      const buttonStyle = {
        padding: '0.75rem',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#333', // Dark color for contrast
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      };
    
      const buttonHoverStyle = {
        backgroundColor: '#555',
      };
      return (
        <div style={containerStyle}>
          <h2 style={titleStyle}>Login</h2>
          <form style={formStyle}>
            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              required
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Log In
            </button>
          </form>
        </div>
      );
    };
    
    export default LoginForm;


