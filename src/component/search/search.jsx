import React, { useState } from 'react';
import axios from 'axios';
import Card from '../Card'; // Assuming you have a MovieCard component defined somewhere

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=188d8743dbba697c940e04a9bcd7e9ff`);
      setMovies(response.data.results);
      setError('');
    } catch (error) {
      setError('Error fetching movies. Please try again.');
      console.error('Error fetching movies:', error);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    fetchMovies(value); // Trigger search on input change
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:placeholder-gray-600"
        placeholder="Search for movies..."
      />

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
