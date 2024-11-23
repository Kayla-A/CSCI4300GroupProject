import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import React from "react";
import {useState, useEffect} from "react";

const CLIENT_ID = "10e4f3b0a20a4ac8b9faa1370d67404f";
const CLIENT_SECRET = "f3724e5a5318407c83fef45cf7d6eaa8";

// To proffessor: Kayla also worked on this too with live share. It may not show my name/edits on GitHub

export default function SearchBar() {
 
    const [searchInput, setSearchInput] = useState("");
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
    // Get Spotify Access Token at app start up


    async function search() {
        console.log("Search for " + searchInput)

        // GET request to get artist id
        var searchDetails = {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        } // searchDetails

        // return the ID of the specified artist
        var artistID = await fetch ('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchDetails)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id})

        // console.log("artist Id is " = artistID);

        // Use the artists ID to grab all of the albums composed by the specified artist
        var albumResults = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchDetails)
        .then(response => response.json())
        .then(data => console.log(data))
        setAlbums(data.items);
    } // search

    console.log(albums)


    return (
        <input
            placeholder = "Search albums by artist"
            className = "w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type = "input"
            onKeyPress = {event => {
                if (event.key == "Enter") {
                    search();
                } // if
            }} // onKeyPress

            onChange = {event => setSearchInput(event.target.value)}
        /> // Input

    ); // return
}; // SearchBar 
