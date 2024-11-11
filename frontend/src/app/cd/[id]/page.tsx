"use client"
import { useRouter } from "next/navigation";
import {useContext, useEffect, useState,} from "react";
import NavBar from "@/app/components/navBar";
import {AuthContext} from "@/app/context/user";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

    const handleDelete =(e) => {
        e.preventDefault();
        alert("this will delete a cd one day");
        //delete api call
    };

    return (
        <div >
             <NavBar></NavBar>
            {/*{!isLoggedIn && (
                <p>NOT LOGGED IN</p>
            )}*/}
            {cd == undefined && (
                <p>Cd not found</p>
            )}
            {cd != undefined && (
                <div className="flex flex-col w-full">
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex flex-col p-2 col-first gap-y-1">
                            <h1 className="text-3xl text-black"> {cd.name || 'CD not found'} </h1>
                            <Image src={cd.imageUrl} alt={`${cd.name} cover`} width={300} height={300}/>
                            <h2 className="text-xl"> Artist: </h2>
                            <p className="text-black">{cd.artist}</p>
                            <h2 className="text-xl">Date Added: </h2>
                            <p className="text-black">{cd.date} </p>
                        </div>
                        <div className="col-last">
                            <h2 className="text-xl"> Track List: </h2>
                            <ol className="list-decimal ml-6">
                                {cd.tracklist.map((track, index) => (
                                    <li key={index}>{track}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="mx-auto flex flex-box gap-x-10">
                        <Link href={`/cd/${cd.id}`} passHref>
                            <button className=" text-black bg-purple-500 px-4 py-3 hover:bg-white-900">
                                Edit
                            </button>
                        </Link>
                        <button
                            onClick={handleDelete}
                            className= " text-black bg-red-500 px-4 py-3 hover:bg-white-900">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}; //CDDetails

export default CDDetails;

