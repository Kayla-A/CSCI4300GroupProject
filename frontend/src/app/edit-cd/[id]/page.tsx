"use client"
import { AuthContext } from "../../context/user";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useRouter } from 'next/navigation';

type CDData = {
    id: string;
    name: string;
    artist: string;
    date: string;
    imgUrl: string;
    tracklist: string[];
};

const EditCd = ({ params }) => {
    const { id } = React.use(params);
    const context = useContext(AuthContext);
    const [cd, setCd] = useState<CDData | undefined>(undefined);
    const userID = typeof window !== "undefined" ? localStorage.getItem("userID") : null;

    if (!context) {
        // Handle case where AuthContext is not available (should not happen)
        throw new Error("AuthContext is not available");
    }
    const { isLoggedIn } = context;

    const router = useRouter();

    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [tracklist, setTracklist] = useState<string[]>([]);
    const [error, setError] = useState('');

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

    const getCd = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/cds/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            if (data.cd) {
                const cd = {
                    id: data.cd._id,
                    name: data.cd.name,
                    artist: data.cd.artist,
                    date: data.cd.dateAdded,
                    imgUrl: data.cd.imgUrl,
                    tracklist: data.cd.tracklist
                };
                setCd(cd);
            } else {
                setError("CD not found");
                alert("CD not found.");
                router.push('/');
            }
        } catch (err) {
            setError('Error fetching CD.');
            alert('Error fetching CD.');
            console.error(err);
        }
        console.log(cd);
    };

    useEffect(() => {
        // Only fetch CD data when id is available and set form data
        if (!id) return;

        getCd();
    }, [id]);

    useEffect(() => {
        // Update form data only after CD data is fetched
        if (cd) {
            setName(cd.name);
            setDate(cd.date);
            setArtist(cd.artist);
            setImageUrl(cd.imgUrl);
            setTracklist(cd.tracklist);
        }
    }, [cd]);

    const editCd = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/cds/${cd?.id}`,{
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userID,
                    name: name,
                    artist: artist,
                    imgUrl: imageUrl,
                    dateAdded: date,
                    tracklist: tracklist
                })
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (err) {
            setError('failed to create cd');
            //alert(error);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const cdData = {
            name,
            artist,
            date,
            imageUrl,
            tracklist,
        };

        // PUT request to update the CD
        editCd();

        console.log("Submitted CD:", cdData);
        // You would typically send this data to your backend for updating
        router.push('/'); // Redirect home
    };

    return (
        <div>
            <NavBar />
            <div className="flex flex-col justify-center">
                <div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 p-3 mx-auto gap-6">
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
                                <label className="text-lg text-black font-medium mb-1">CD Cover Art (1:1 aspect ratio preferred)</label>
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
                            className="col-span-2 mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCd;
