"use client"
import Image from "next/image";
import Nav from "./components/navBar"
import {AuthContext} from "./context/user";
import Link from "next/link";
import {useContext} from "react"
import Item from "./components/items" //!!!!!!
const Home = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext is not available");
    }

    const { isLoggedIn, logout } = context;

    // dummy array !!!!!!!!!!!!!!!!!!!
    const items = [
        {id: 1, image: "https://qodeinteractive.com/magazine/wp-content/uploads/2020/06/8-Tyler-the-Creator.jpg", title: "Item 1"},
        {id: 2, image: "https://www.billboard.com/wp-content/uploads/media/ariana-grande-sweetner-album-art-2018-billboard-1240.jpg?w=600", title: "Item 2"},
        {id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qh_FaKYHyGpJccXuuYs5Y7JULJetgAuk1w&s", title: "Item 3"}
    ];
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!


    return (
        <div>
            <Nav></Nav>
            {!isLoggedIn && (
                <div className="flex flex-col items-center justify-center min-h-screen gap-5">
                    <Image src="/cd.png" alt="cd" width={500} height={500}/>
                    <h1 className="text-black text-5xl">Shelf Space</h1>
                    {/* testing dummy array */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        {items.map(item => (
                            <Item key={item.id} image={item.image} title={item.title} />
                        ))}
                    </div>
                    {/* testing dummy array */}
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
