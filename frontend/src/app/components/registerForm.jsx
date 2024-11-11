import React from 'react';

const RegisterForm = () => {
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
        <div style={containerStyle}>
            <div style={formStyle}>
                <h2 style={titleStyle}>Register</h2>
                <form>
                    <input type="email" placeholder="Email" style={inputStyle} required />
                    <input type="password" placeholder="Password" style={inputStyle} required />
                    <button type="submit" style={buttonStyle}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;