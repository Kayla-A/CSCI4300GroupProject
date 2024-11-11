"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "@/app/components/navBar";

// The CD's data to display
interface CDData {
    name: string;
    artist: string;
    date: string;
    imageUrl: string;
    tracklist: string[];
} // CDData

const CDDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    // Dummy data for now !!!!!!!!!!!!!!!!!!!!!!
    const [cdData, setCdData] = useState<CDData> ({
        name: "Dummy Album",
        artist: "Dummy Artist",
        date: "dumbuaray/04/2024",
        imageUrl: "https://pbs.twimg.com/profile_images/1584626935946104833/PG6hu59k_400x400.jpg",
        tracklist: ["You", "Are", "A", "Dummy", "Just Kidding", "LOL"],
    });

    useEffect(() => {
        // fetch CD data using id if API avaliable 
        // don't have for now so use dummy data
    }, [id]);

    return (
        <div className = "cdInfoContainer">
             <NavBar></NavBar>
            {/*{!isLoggedIn && (
                <p>NOT LOGGED IN</p>
            )}*/}
            <div className = "cdInfoLeftSide">
                <h1> {cdData.name} </h1>
                <p><strong> Artist: </strong> {cdData.artist} </p>
                <p><strong> Release Date: </strong> {cdData.date} </p>
                {cdData.imageUrl && (
                    <img src={cdData.imageUrl} alt={'${cdData.name} cover'} />
                )}
            </div>
            <div className = "cdInfoRightSide">
                <h2> Track List: </h2>
                <ul>
                    {cdData.tracklist.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}; //CDDetails

export default CDDetails;

