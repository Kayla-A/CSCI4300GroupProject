"use client"
import React from 'react';
import {useContext} from "react";
import RegistrationForm from "../components/registrationForm";
import { AuthContext } from "../context/user";
import NavBar from "../components/navBar";
import RestrictedAccess from "../components/restrictedAccess";

const RegPage = () => {
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
                <RegistrationForm></RegistrationForm>
            )}
        </div>
    );
};

export default RegPage;