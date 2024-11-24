"use client"
import Image from "next/image";
import NavBar from "./components/navBar"
import { AuthContext } from "./context/user";
import Link from "next/link";
import { useContext } from "react"
import CdCardShelfList from "@/app/components/cdCardShelfList";
import CdShelfCard from "@/app/components/cdShelfCard";
import DisplayShelf from "@/app/components/displayShelf";

type cd = {
    id: number;
    name: string;
    imageUrl: string;
    artist: string;
}

const Home = () => {
    // Kayla did this with live share: Get Spotify Access Token at app start up

    {/*
        const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        //API Access Token
        var authParametes = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }

        // fecth may need error handling 
        fetch('https://accounts.spotify.com/api/token', authParametes)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, []) // useEffect
    */}
    // Get Spotify Access Token at app start up


    //dummy data
    const dummyCds = [
        { id: 1, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 2, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 3, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 4, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 5, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 6, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 7, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 8, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 9, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 10, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 11, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 12, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 13, name: "Abbey Road 10000", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 14, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 15, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 16, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 17, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 18, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 19, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 20, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 21, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 22, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
        { id: 23, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator" },
        { id: 24, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer" },
        { id: 25, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles" },
    ];


    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext is not available");
    }

    const { isLoggedIn } = context;
    const userID = typeof window !== "undefined" ? localStorage.getItem("userID") : null;



    return (
        <div>
            <NavBar></NavBar>
            {!isLoggedIn && (
                <div className="flex flex-col items-center justify-center min-h-screen gap-5">
                    <Image src="/cd.png" alt="cd" width={500} height={500} />
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
                    <DisplayShelf cdArray = {dummyCds}></DisplayShelf>
                </div>
            )}
        </div>
    );//return
};//home


export default Home;
