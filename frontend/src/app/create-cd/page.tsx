"use client"
import {AuthContext} from "../context/user";
import Link from "next/link";
import {useContext, useEffect, useState} from "react"
import NavBar from "../components/navBar";
import { useRouter } from 'next/navigation';


const CreateCd = () => {
    const context = useContext(AuthContext);

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
        const now = new Date(); // Get the current date and time
        setDate(now.toLocaleDateString('en-US')); // Format and set the date
    }, []);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // post to backend
        const cdData = {
            name,
            artist,
            date,
            imageUrl,
            tracklist,
        };

        console.log("Submitted CD:", cdData);
    //clear form
        setName('');
        setArtist('');
        setDate('');
        setImageUrl('');
        setTracklist([]);

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

export default CreateCd;


