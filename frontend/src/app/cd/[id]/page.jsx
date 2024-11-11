"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CdDetail = () => {
    const router = useRouter();
    const { id } = router.query;

     // Ensure the router is ready
     if (!router.isReady) {
        return <div>Loading...</div>;
    }
    
    // Dummy CD data
    const cdData = {
        name: "Sample CD Title",
        artist: "Sample Artist",
        date: "01/01/2020",
        imageUrl: "https://pbs.twimg.com/profile_images/1584626935946104833/PG6hu59k_400x400.jpg",
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4"],
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>{cdData.name}</h1>
            <p><strong>Artist:</strong> {cdData.artist}</p>
            <p><strong>Release Date:</strong> {cdData.date}</p>
            {cdData.imageUrl && (
                <img 
                    src={cdData.imageUrl} 
                    alt={`${cdData.name} cover`} 
                    style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '20px 0' }} 
                />
            )}
            <h3>Track List</h3>
            <ul>
                {cdData.tracklist.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
        </div>
    );
};

export default CdDetail;
