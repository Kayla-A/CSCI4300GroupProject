import React, { useState } from "react";


export default function AlbumCards({ album }) {

  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <button>
        <img
          src={album.images[0]?.url} 
          alt={album.name}
          className="w-full h-48 object-cover"
          onClick = {() => console.log("CLICKED")} // onClick (when click add album info to shelf??)
        />
      </button>
      <div className="p-4">
        <h3 className="text-lg font-bold">{album.name}</h3>
      </div>
    </div>
  );
}



