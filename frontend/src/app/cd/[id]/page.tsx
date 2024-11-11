"use client"
import { useRouter } from "next/navigation";
import {useContext, useEffect, useState,} from "react";
import NavBar from "@/app/components/navBar";
import {AuthContext} from "@/app/context/user";
import React from "react";

// The CD's data to display
type CDData = {
    id:number;
    name: string;
    artist: string;
    date: string;
    imageUrl: string;
    tracklist: string[];
} // CDData

const CDDetails = ({params}) => {
    const router = useRouter();
    const { id } = React.use(params); //DO NOT CHANGE!!!!!
    const context = useContext(AuthContext);
    const { isLoggedIn, logout } = context;
    const [cd, setCd] = useState<CDData | undefined>(undefined);



    // Dummy data for now !!!!!!!!!!!!!!!!!!!!!!

    useEffect(() => {
        // fetch CD data using id if API avaliable 
        // don't have for now so use dummy data
        if (!id) return;
        const urlId = parseInt(id as string,10);
        const dummyCds : CDData[] = [
            { id: 1, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles", date: "04/20/2001", tracklist: [
                    "Come Together",
                    "Something",
                    "Maxwell's Silver Hammer",
                    "Oh! Darling",
                    "Octopus's Garden",
                    "I Want You (She’s So Heavy)",
                    "Here Comes the Sun",
                    "Because",
                    "You Never Give Me Your Money",
                    "Sun King",
                    "Mean Mr. Mustard",
                    "Polythene Pam",
                    "She Came In Through the Bathroom Window",
                    "Golden Slumbers",
                    "Carry That Weight",
                    "The End",
                    "Her Majesty"
                ] },
            { id: 2, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator",  date: "04/20/2001", tracklist: [
                    "IGOR'S THEME",
                    "EARFQUAKE",
                    "I THINK",
                    "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
                    "RUNNING OUT OF TIME",
                    "NEW MAGIC WAND",
                    "A BOY IS A GUN*",
                    "PUPPET",
                    "WHAT'S GOOD",
                    "I DON'T LOVE YOU ANYMORE",
                    "ARE WE STILL FRIENDS? (BEST FRIEND?)"
                ] },
            { id: 3, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer",  date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ] },
            { id: 4, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer",  date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ] },
            { id: 5, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer",  date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ] },
            { id: 6, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer",  date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ] },
            { id: 7, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer",  date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ] },
            { id: 8, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer",  date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ] }
        ];
        const cd = dummyCds.find(cd => cd.id === urlId);
        setCd(cd);
    }, [id]);
    return (
        <div className = "cdInfoContainer">
             <NavBar></NavBar>
            {/*{!isLoggedIn && (
                <p>NOT LOGGED IN</p>
            )}*/}
            {cd == undefined && (
                <p>Cd not found</p>
            )}
            {cd != undefined && (
                <div>
                    <div className="cdInfoLeftSide">
                        <h1> {cd.name || 'CD not found'} </h1>
                        <p><strong> Artist: </strong> {cd.artist} </p>
                        <p><strong> Release Date: </strong> {cd.date} </p>
                        {cd.imageUrl && (
                            <img src={cd.imageUrl} alt={`${cd.name} cover`}/>
                        )}
                    </div>
                    <div className="cdInfoRightSide">
                        <h2> Track List: </h2>
                        <ol>
                            {cd.tracklist.map((track, index) => (
                                <li key={index}>{track}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
}; //CDDetails

export default CDDetails;

