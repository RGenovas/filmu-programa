import { useState, useEffect, useRef } from "react"
import { Link} from 'react-router-dom'
import axios from 'axios'
import './Homepage.css'
import Header from "../headerandfooter/Header"
import Footer from "../headerandfooter/Footer"
import {RiKnifeBloodFill,  RiGhost2Fill} from "react-icons/ri"





const Homepage = () => {
    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState('')
    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
    useEffect(() => {
        const getTopMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?${key}}&include_video=false&language=en-US`
            )
            setMovies(response.data.results)
            setPages(response.data.total_pages)
          } catch(error) {
            console.error('Error fetching  top movie list', error)
          }
            }
            getTopMovies()},[])
            console.log(pages)
      
    
    
  return (
    <div>
        <Header/>
        <h3>Latest movies </h3>

    <div className='top-movies'>
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
        <Link  to={`/details/${movie.id}`}><button className="btn-link">Details</button></Link>
        <Link to={`/trailer/${movie.id}`}><button  className="trailer-btn">Youtube Trailer</button></Link>
        </div>
      ))
      }
    

     
     </div> 
     <Footer/>
    </div>
  )
}

export default Homepage
