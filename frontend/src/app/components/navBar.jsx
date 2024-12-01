"use client"
import Link from "next/link";
import Image from "next/image";
import {useContext} from "react";
import { AuthContext } from "../context/user";
import { useRouter } from "next/navigation";
import SearchBar from "./searchBar";


export default function NavBar() {
    const {isLoggedIn, logout} = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <nav className="bg-purple-400-800 p-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center space-x-4">
                    <div >
                        <Link href="/">
                            <Image src="/cd.png" alt="cd" width={50} height={50}/>
                        </Link>
                    </div>
                    <div className="text-black text-2xl">Shelf Space</div>
                </div>
            
                <div className="flex justify-center items-center h-full">
                    {/* <Link href="./spotifyResults">
                     <button 
                     type="button" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
            Search by albums using Spotify
        </button>
    </Link> */}
</div>
    {/* <p className="mt-4 text-black">Click here to return to shelf</p> */}
                {/*
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                    />
                */}
                {/* </div> */}
                {!isLoggedIn &&(
                    <Link href="../login">
                    <button className="rounded bg-pink-500 text-white px-4 py-3 hover:bg-white hover:text-black">
                    Login
                    </button>
                    </Link>)
                }
                {isLoggedIn && (
                    <>
                    <Link href="../spotifyResults">
                        {/* <button className="px-4 py-3 hover:bg-white-900">
                            Search 
                          </button> */}
                        <button 
                        type="button" 
                        className="px-4 py-2 text-black rounded hover:blue focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Search by albums using Spotify
                        </button>
                    </Link>

                   
                        <Link href="../create-cd">
                            <button className="px-4 py-3 hover:bg-white-900">
                                Add CD
                            </button>
                        </Link>
                        <button onClick={handleLogout} className=" rounded bg-red-500 text-white px-4 py-3 hover:bg-white hover:text-black">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    ); //return
};//navBar

