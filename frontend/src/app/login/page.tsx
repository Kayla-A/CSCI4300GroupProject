"use client"
import React from 'react';
import {useContext} from "react";
import LoginForm from '../components/loginForm';
import { AuthContext } from "../context/user";
import NavBar from "../components/navBar";
import RestrictedAccess from "../components/restrictedAccess";
const LoginPage = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext is not available");
    }
    const { isLoggedIn } = context;
    return (
    <div>
        <NavBar></NavBar>
        {isLoggedIn && (
            <RestrictedAccess></RestrictedAccess>
        )}
        {!isLoggedIn && (
            <LoginForm></LoginForm>
        )}
    </div>
  );
};

export default LoginPage;