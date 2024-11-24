'use client';

import React from 'react';
import { useSearch } from '../context/searchResults';

export default function SearchResults() {
  const { searchResults } = useSearch(); 

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 text-black rounded-lg shadow-md p-6 mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Results</h1>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {searchResults.map((album) => (
            <div key={album.id} className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src={album.images[0]?.url || '/placeholder.png'}
                alt={album.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <p className="font-semibold text-sm truncate">{album.name}</p>
              <p className="text-xs text-gray-500 truncate">
                {album.artists[0]?.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No albums found.</p>
      )}
    </div>
  );
}
