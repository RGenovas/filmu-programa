import { useRef, useState } from 'react'
import axios from 'axios';

import './Search.css'
import { Link } from 'react-router-dom';
import Header from '../headerandfooter/Header';


const Search = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')
    const moviesRef=useRef()
    const handleSearch = async (e) => {
        e.preventDefault()
    let movie = moviesRef.current.value
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=53c258bb52d305146e19a71e58aa2cc5&query=${movie}`
          )
          setMovies(response.data.results)
         
        } catch(error) {
          console.error('Error Fetching Entries', error)
          setError(error)
        }
        console.log(movies)
          }
  return (
    <div>
        <Header/>
    <div className='searchwindow'>
        <div className="search-input">
        <form onSubmit={handleSearch}>
            <h2>Search by title:</h2>
            <input type="text" ref={moviesRef} />
            <button className='search-btn' type='submit'>Search</button>
        </form>
        </div>
    <div className="top-movies">
        { movies.length > 0 &&
            movies.map((movie) => (
                <div key={movie.id} className='top-movie'>
                <h4>{movie.title}</h4>
                <img className='poster' src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path} ></img>
                <p>{movie.overview.slice(0,120) + '...'}</p>
                <button><a href={'https://www.themoviedb.org/movie/' +movie.id} className='movieLink'>Skaityti toliau</a></button>
        
                </div>
                ))
        }
    </div>
    </div>

    </div>
  )
}
export default Search
