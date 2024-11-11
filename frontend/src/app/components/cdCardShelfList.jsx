import React from 'react';
import CdShelfCard from "./cdShelfCard";



const CdCardShelfList = (props) => {
    return (
        <div className=" flex flex-col justify-center mx-auto pb-1.5 ">
            {dummyCds.map((cd) => (
            <CdShelfCard
                key = {cd.id}
                id = {cd.id}
                name = {cd.name}
                dateAdded = {cd.date}
                imageUrl = {cd.imageUrl}
                tracklist = {cd.tracklist}
                artist = {cd.artist}
                />
            ))}
        </div>
    )
}

export default CdCardShelfList;