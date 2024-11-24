import React from "react";

export default function AlbumCards({ album }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={album.images[0]?.url} 
        alt={album.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{album.name}</h3>
      </div>
    </div>
  );
}



