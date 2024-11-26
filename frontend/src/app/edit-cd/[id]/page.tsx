"use client"
import {AuthContext} from "../../context/user";
import Link from "next/link";
import React, {useContext, useEffect, useState} from "react"
import NavBar from "../../components/navBar";
import { useRouter } from 'next/navigation';

type CDData = {
    id: number;
    name: string;
    artist: string;
    date: string;
    imageUrl: string;
    tracklist: string[];
} // CDData

const EditCd = ({params}) => {
    const { id } = React.use(params);
    const context = useContext(AuthContext);
    const [cd, setCd] = useState<CDData | undefined>(undefined);

    if (!context) {
        // Handle case where AuthContext is not available (should not happen)
        throw new Error("AuthContext is not available");
    }
    const { isLoggedIn} = context;

    const router = useRouter();

    const [name,setName] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [tracklist, setTracklist] = useState<string[]>([])

    // @ts-ignore
    const handleDate = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove any non-digit characters
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2); // Insert the slash after MM
        }
        if (value.length >= 5) {
            value = value.slice(0, 5) + '/' + value.slice(2); // Insert the slash after DD
        }
        if (value.length > 10) {
            value = value.slice(0, 10); // Limit input to MM/DD/YYYY format
        }
        setDate(value);
    };
    useEffect(() => {
        // fetch CD data using id if API avaliable
        // don't have for now so use dummy data
        if (!id) return;
        const urlId = parseInt(id as string, 10);
        const dummyCds: CDData[] = [
            {
                id: 1, name: "Abbey Road", imageUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25", artist: "The Beatles", date: "04/20/2001", tracklist: [
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
                ]
            },
            {
                id: 2, name: "Igor", imageUrl: "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57", artist: "Tyler The Creator", date: "04/20/2001", tracklist: [
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
                ]
            },
            {
                id: 3, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer", date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ]
            },
            {
                id: 4, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer", date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ]
            },
            {
                id: 5, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer", date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ]
            },
            {
                id: 6, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer", date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ]
            },
            {
                id: 7, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer", date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ]
            },
            {
                id: 8, name: "Blue Album", imageUrl: "https://i.scdn.co/image/ab67616d00001e02345536847e60f622ee0eae96", artist: "Weezer", date: "04/20/2001", tracklist: [
                    "My Name Is Jonas",
                    "No One Else",
                    "The World Has Turned and Left Me Here",
                    "Buddy Holly",
                    "Undone – The Sweater Song",
                    "Surf Wax America",
                    "Say It Ain't So",
                    "Holiday",
                    "Only in Dreams"
                ]
            }
        ];
        const cd = dummyCds.find(cd => cd.id === urlId);
        setCd(cd);
        // @ts-ignore
        setName(cd?.name);
        // @ts-ignore
        setDate(cd?.date);
        // @ts-ignore
        setArtist(cd?.artist);
        // @ts-ignore
        setImageUrl(cd?.imageUrl);
        // @ts-ignore
        setTracklist(cd?.tracklist);
    }, [id]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const cdData = {
            name,
            artist,
            date,
            imageUrl,
            tracklist,
        };
        //put request

        console.log("Submitted CD:", cdData);
        router.push('/'); //return home
    };

    return (
        <div>
            <NavBar></NavBar>
            {/*{!isLoggedIn && (
                <p>NOT LOGGED IN</p>
            )}*/}
            <div className= "flex flex-col justify-center">
                <div>
                    <form onSubmit={handleSubmit} className= "grid grid-cols-1 sm:grid-cols-2 p-3 mx-auto gap-6">
                        <div className="col-first">
                            <div>
                                <label className="text-lg text-black font-medium mb-1">CD Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-lg text-black font-medium mb-1">Artist</label>
                                <input
                                    type="text"
                                    value={artist}
                                    onChange={(e) => setArtist(e.target.value)}
                                    className="w-full p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-lg text-black font-medium mb-1">Date Added</label>
                                <input
                                    type="text"
                                    value={date}
                                    onChange={handleDate}
                                    className="w-full p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-lg text-black font-medium mb-1">CD Cover Art(1:1 aspect ratio
                                    preferred)</label>
                                <input
                                    type="text"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="col-last">
                            <label className="text-lg text-black font-medium mb-1">Tracklist</label>
                            <textarea
                                value={tracklist.join("\n")}
                                onChange={(e) => setTracklist(e.target.value.split("\n"))}
                                className="w-full h-full mr-4 p-3 border border-gray-400 rounded-lg text-black box-border focus:outline-none"
                                rows={4}
                                placeholder="Enter each track on a new line"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" col-span-2 mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>//wrapping div
    );
};

export default EditCd;


