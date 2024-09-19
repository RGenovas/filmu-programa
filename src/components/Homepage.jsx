import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import './Homepage.css'
import Header from "../headerandfooter/Header"


const Homepage = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        // `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
          
        const getTopMovies = async () => {
          try {
            const response = await axios.get(
              'https://api.themoviedb.org/3/movie/popular?api_key=53c258bb52d305146e19a71e58aa2cc5'
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
        <h2>Top 10 trending:</h2>
    <div className='top-movies'>
  
      {
      movies.slice(0, 10).map((movie) => (
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
  )
}

export default Homepage
