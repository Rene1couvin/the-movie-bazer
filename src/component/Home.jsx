import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import sv from '../assets/play.svg';
import sv1 from '../assets/fire.svg';
import im1 from '../assets/fronts.png'
import im2 from '../assets/backs.png'
import { NavLink } from 'react-router-dom';
// import sv from '../src/assets/play.svg'
// import sv1 from '../src/assets/fire.svg'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [pop, setPop] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=188d8743dbba697c940e04a9bcd7e9ff');
      const popular = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=188d8743dbba697c940e04a9bcd7e9ff');
      setMovies(response.data.results);
      setPop(popular.data.results);
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=1&include_adult=false&api_key=188d8743dbba697c940e04a9bcd7e9ff`);

      if (response.data.results.length > 0) {
        setSearchResults(response.data.results);
        setNoMatch(false);
      } else {
        setSearchResults([]);
        setNoMatch(true);
      }
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className='px-4'>

      <div className='px-4 bg-beast'>
        <div className='flex flex-col md:flex-row bg-beast'>
          <div className='md:w-1/2 py-8 md:py-28'>
            <p className='text-2xl'>FIND MOVIES</p>
            <p className='text-4xl font-sans font-bold beast'>TV SHOW AND MORE</p>

            <p className='py-4'>
              Movies are a powerful medium that captivate audiences through storytelling, visuals, and sound. They transport viewers to different worlds, evoke a range of emotions, and provoke thought and reflection. From gripping dramas that explore the depths of human experience to heartwarming comedies that offer moments of laughter and joy, movies cater to diverse tastes and interests.
            </p>
            <button className='flex rounded-xl border-2 border-white px-4 py-2'><img src={sv} alt="sv" className="h-[40px]" /><p className='pt-2 px-2'>Watch Tutorial</p></button>
            <div className='flex items-center py-4 md:py-8'>
              <input
                type='text'
                placeholder='Search movies...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='px-4 py-2 border border-gray-400 rounded-md mr-2'
              />
              <button
                onClick={handleSearch}
                className='px-4 py-2 bg-blue-500 text-white rounded-md'
              >
                Search
              </button>
            </div>
          </div>
          <div className='md:w-1/2 relative ml-0 md:ml-32 md:pr-8'>
            <img src={im2} alt='im2' className="absolute w-[20rem] h-[450px] top-0 mt-18 ml-[10rem]" />
            <div className='relative w-[20rem] h-[450px] mt-20 ml-[2rem]'>
              <img src={im1} alt='im1' className="absolute w-full h-full object-cover" />
              <img src={sv} alt="sv" className="absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto w-32 h-32" />
            </div>
          </div>
        </div>


        <div className='w-full '>
          {searchResults.length > 0 && (
            <div className="flex justify-center place-content-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {searchResults.map((movie, index) => (
                <Card
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              ))}
            </div>
          )}
          {noMatch && (
            <p>No match found for "{searchTerm}"</p>
          )}
        </div>
      </div>
      <div className='flex items-center px-4 py-8'>
        <img src={sv1} alt="sv" className='h-4 w-4' />
        <p className='flex'>Trending</p>
        <hr className='flex-grow border-t border-gray-700 mx-4' />
        <p className='flex'>See More</p>
      </div>

      <div className='flex justify-center place-content-center items-center grid grid-cols-1 gap-y-24 sm:grid-cols-2 md:grid-cols-5'>

        {movies.map((movie, index) => (
          <NavLink key={index} to={`/detail/${movie.id}`}>
            <Card
              title={movie.original_title}
              price={movie.vote_average}
              vote={movie.vote_count}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </NavLink>
        ))}
      </div>
      <div className='flex items-center px-4 py-8'>
        <p className='flex'>YOU MAY LIKE THIS</p>
        <hr className='flex-grow border-t border-gray-700 mx-4' />
        <p className='flex'>See More</p>
      </div>


      <div className='flex justify-center place-content-center items-center grid grid-cols-1 gap-y-24 sm:grid-cols-2 md:grid-cols-5'>

        {pop.map((popular, index) => (
          <Card
            key={index}
            title={popular.original_title}
            price={popular.vote_average}
            vote={popular.vote_count}
            src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
