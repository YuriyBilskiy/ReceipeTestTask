'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const cuisinesList = ['Italian', 'Mexican', 'Chinese', 'French', 'Japanese'];

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [selectCuisine, setSelectCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (selectCuisine) params.append('cuisine', selectCuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Find Your Perfect Recipe
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search for a recipe..."
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none p-3 rounded-md text-gray-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none p-3 rounded-md text-gray-700"
            value={selectCuisine}
            onChange={(e) => setSelectCuisine(e.target.value)}
          >
            <option value="">Select Cuisine</option>
            {cuisinesList.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Max Ready Time (minutes)"
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none p-3 rounded-md text-gray-700"
            value={maxReadyTime}
            onChange={(e) => setMaxReadyTime(e.target.value)}
          />
          <button
            type="submit"
            disabled={!query || !selectCuisine || !maxReadyTime}
            className={`w-full text-white font-semibold p-3 rounded-md transition duration-300 ${
              !query || !selectCuisine || !maxReadyTime
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
