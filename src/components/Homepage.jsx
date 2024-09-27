import { useState, useEffect, useRef } from "react"
import { Link} from 'react-router-dom'
import axios from 'axios'
import './Homepage.css'
import Header from "../headerandfooter/Header"


const Homepage = () => {
    const [movies, setMovies] = useState([])
    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
    useEffect(() => {
        // `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
          
        const getTopMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?${key}`
            )
            setMovies(response.data.results)
          } catch(error) {
            console.error('Error fetching  top movie list', error)
          }
            }
            getTopMovies() },[])
 
  return (
    <div>
        <Header/>
        <h3>Latest movies:</h3>
    <div className='top-movies'>
      {
      movies.map((movie) => (
        <div key={movie.id} className='movie'>
        <h4 className="movie_name">{movie.title} ({movie.release_date.slice(0,4)})</h4>
        <img className='poster' src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path} ></img>
        <p className="movie-description">{movie.overview.slice(0,200) + '...'} </p>
        <Link className="btn-link" to={`/details/${movie.id}`}>Read more</Link>
 

        </div>
      ))
      }
     
     </div> 
     
    </div>
  )
}

export default Homepage
