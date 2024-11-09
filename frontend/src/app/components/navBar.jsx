import Link from "next/link";
import Image from "next/image";
import {useContext} from "react";
import { AuthContext } from "../context/user";
import { useRouter } from "next/navigation";


export default function NavBar() {
    const {isLoggedIn, logout} = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
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
                    <div className="text-white text-2xl">Shelf Space</div>
                </div>
                <div className="flex-grow mx-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                    />
                </div>
                {!isLoggedIn &&(
                    <Link href="../login">
                    <button className="px-4 py-3 hover:bg-white-900">
                    Login
                    </button>
                    </Link>)
                }
                {isLoggedIn && (
                    <button onClick={handleLogout} className="px-4 py-3 hover:bg-white-900">
                        Login
                    </button>)
                }
            </div>
        </nav>
    ); //return
};//navBar