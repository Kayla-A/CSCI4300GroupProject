import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
 
export default function AlbumCards({ album, accessToken }) {
const router = useRouter();
// testing -------------------------------
  const albumData = {
    name: album.name,
    artist: album.artists[0]?.name || '',
    imgUrl: album.images[0]?.url || '',
    albumId: album.id,
  };


const handleClick = async () => {
  try {
    const tracklist = await fetchTrackList(albumData.albumId, accessToken);
    const dataToSave = {...albumData, tracklist};
  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedAlbum', JSON.stringify(dataToSave));
  } // if
  router.push('/create-cd')
  } catch (error) {
    console.error('Error fetching tracklist or saving data:', error);
  }
}; // handle click

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


// testing -------------------------------

  return (
   //<Link href = "/create-cd">
      <div className ="album-card cursor-pointer" onClick={handleClick}>
        <img src={albumData.imgUrl} alt={albumData.name} />
        <h3>{albumData.name}</h3>
        <p>{albumData.artist}</p>
      </div>
   // </Link>
     );
    }







    /** 
    <div className="border rounded-lg shadow-md overflow-hidden">
      <button>
        <img
          src={album.images[0]?.url} 
          alt={album.name}
          className="w-full h-48 object-cover"
           onClick = {() => 
              console.log("CLICKED")
          } // onClick (when click add album info to shelf??)
        />
      </button>
      <div className="p-4">
        <h3 className="text-lg font-bold">{album.name}</h3>
      </div> 
    </div>
    */
//   );
// }









