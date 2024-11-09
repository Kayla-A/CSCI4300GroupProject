"use client"
import {createContext, useEffect, useState, ReactNode} from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checkID, setCheckID] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedUserID = localStorage.getItem("userID");
        if (storedUserID) {
            setCheckID(storedUserID);
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (username,password) => {
        try{
            //post login request
            setIsLoggedIn(true);
            /*
            setCheckID(response.data.id);
            localStorage.setItem("userID", response.data.id);
            */
            router.push("/")
        } catch (error){
            console.log("login unsucessful");
            alert("username or password incorrect");
        }
    };
    const logout = () =>{
        localStorage.removeItem("userID");
        setIsLoggedIn(false);
        setCheckID(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider };
