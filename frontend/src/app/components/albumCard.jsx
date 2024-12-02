import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
 
export default function AlbumCards({ album, accessToken }) {
const router = useRouter();

  // Dictate the info and the structure of the results from the api
  const albumData = {
    name: album.name,
    artist: album.artists[0]?.name || '',
    imgUrl: album.images[0]?.url || '',
    albumId: album.id,
  };

// Handle the logic for when a card is slicked 
const handleClick = async () => {
  try {
    // Grab the tracklists for the various albums
    const tracklist = await fetchTrackList(albumData.albumId, accessToken);
    const dataToSave = {...albumData, tracklist};

  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedAlbum', JSON.stringify(dataToSave));
  } // if
  // Route to tge create-cd page after an album card is clicked
  router.push('/create-cd')
  } catch (error) {
    console.error('Error fetching tracklist or saving data:', error);
  }
}; // handle click

// Fetch anbd process the results fromn the spotify api
const fetchTrackList = async (albumId, token) => {
  const response = await fetch(
    `https://api.spotify.com/v1/albums/${albumId}/tracks`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  const tracks = data.items.map((track) => track.name);
  return tracks;
} // fetchTrackList

  // Place the each of albums into a card
  return (
      <div className ="album-card cursor-pointer" onClick={handleClick}>
        <img src={albumData.imgUrl} alt={albumData.name} />
        <h3>{albumData.name}</h3>
        <p>{albumData.artist}</p>
      </div>
     );
    }










