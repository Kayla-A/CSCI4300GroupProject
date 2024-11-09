"use client"
import Image from "next/image";
import Nav from "./components/navBar"
import {AuthContext} from "./context/user";
import Link from "next/link";
import {useContext} from "react"
const Home = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext is not available");
    }

    const { isLoggedIn, logout } = context;


    return (
        <div>
            <Nav></Nav>
            {!isLoggedIn && (
                <div className="flex flex-col items-center justify-center min-h-screen gap-5">
                    <Image src="/cd.png" alt="cd" width={500} height={500}/>
                    <h1 className="text-black text-5xl">Shelf Space</h1>
                    <p className="text-black">See your Cd collection wherever whenever</p>
                    <div className="flex items-center mx-auto gap-4 ">
                        <Link href="./login">
                            <button className=" text-black bg-purple-100 px-4 py-3 hover:bg-white-900">
                                Login
                            </button>
                        </Link>
                        <Link href="./registration">
                            <button className=" text-black bg-purple-100 px-4 py-3 hover:bg-white-900">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            )}
            {isLoggedIn && (
                <div>
                    <p>Not ready yet :P</p>
                </div>
            )}
        </div>
    );//return
};//home


export default Home;
