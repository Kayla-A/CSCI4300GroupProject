"use client"
import {createContext, useEffect, useState, ReactNode} from "react";
import { useRouter } from "next/navigation";
import {NextResponse as reponse} from "next/server";

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
            const response = await fetch("http://localhost:3000/api/login",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            //const response = { data: { id: "12345" } }; // Mock response
            setCheckID(data.user.id);
            localStorage.setItem("userID", data.user.id);
            setIsLoggedIn(true);
            console.log(isLoggedIn);
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
        <AuthContext.Provider value={{ isLoggedIn,checkID, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider };
