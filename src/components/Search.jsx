import { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import './Search.css'
import { Link, useParams } from 'react-router-dom';
import Header from '../headerandfooter/Header';
import {RiKnifeBloodFill,  RiGhost2Fill} from "react-icons/ri"
import Footer from '../headerandfooter/Footer';


const Search = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')
    const moviesRef = useRef()
    const {film} = useParams();
    const [searchFilm, setSearchFilm] = useState(film)
    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
    useEffect(() => {
      
      const handleLoadSearch = async () => {
            try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?${key}&query=${searchFilm}`
              )
              setMovies(response.data.results)
             
            } catch(error) {
              console.error('Error Fetching Entries', error)
              setError(error)
            }
       
              }
     handleLoadSearch() },[searchFilm])

     useEffect(() => {
      setSearchFilm(film)
      },[film])

    const handleSearch = async (e) => {
        e.preventDefault()
        let query = moviesRef.current.value 
        setSearchFilm(query)
    }
  return (
    <div>
    <Header />
    <h3>Search by title:</h3>
    <div className='search-form'>
    <form  className='form-search'  onSubmit={handleSearch} >
       <input className='search-window-input' type="text" ref={moviesRef} placeholder={searchFilm}/>    <button className='search-window-btn' type='submit'>Search</button>
    </form>
        </div>
        {movies.length> 0 &&
    <div className="top-movies">
   {
      movies.map((movie) => (
        <div key={movie.id} className='movie'>
        <h4 className="movie_name">{movie.title} ({movie.release_date.slice(0,4)})</h4>
        <h4 className="movie_rating"> <RiGhost2Fill/> Rating: {parseFloat(movie.vote_average).toFixed(2)}
        </h4>
        <img className='poster' src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path} alt="movie-poster"    onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/200x300?text=No+Image";
              }}/>
        <p className="movie-description">{movie.overview.slice(0,200) + '...'} </p>
        <Link  to={`/details/${movie.id}`}><button className="btn-link">Read more</button></Link>
        <Link to={`/trailer/${movie.id}`}><button  className="trailer-btn">Youtube Trailer</button></Link>
        </div>
      ))
      }
    
     
      
    </div>
}
  <Footer/>
    </div>

  
  )
}
export default Search
