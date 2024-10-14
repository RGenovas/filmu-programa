import { useRef, useState } from 'react'
import axios from 'axios';
import square from '../img/square.png'
import './Search.css'
import { Link } from 'react-router-dom';
import Header from '../headerandfooter/Header';


const Search = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')
    const moviesRef=useRef()

    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
    const handleSearch = async (e) => {
        e.preventDefault()
    let movie = moviesRef.current.value
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?${key}&query=${movie}`
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
            <input className='searc-input' type="text" ref={moviesRef} />
            <button className='search-btn' type='submit'>Search</button>
        </form>
        </div>
        {movies.length> 0 &&
    <div className="top-movies">
    { 
      movies.map((movie) => (
        <div key={movie.id} className='movie'>
        <h4 className="movie_name">{movie.title} ({movie.release_date.slice(0,4)})</h4>
        <img className='poster' src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path} ></img>
        <p className="movie-description">{movie.overview.slice(0,200) + '...'} </p>
        <Link  to={`/details/${movie.id}`}><button className="btn-link">Read more</button></Link>
        <Link to={`/trailer/${movie.id}`}><button  className="trailer-btn">Youtube Trailer</button></Link>
        </div>
      ))
      }
     
      
    </div>
}
    </div>

    </div>
  )
}
export default Search
