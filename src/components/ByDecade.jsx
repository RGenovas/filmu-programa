import { useState, useEffect, useRef } from "react"
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'
import './ByDecade.css'
import Header from "../headerandfooter/Header"




const ByDecade = () => {
    let {year} = useParams()
    const yearFrom = year + "-01" + "-01"
    const yearTo = year.substring(0, year.length - 1) + "9" +"-12" +"-31"
    const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState('1')
    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
  
    
    useEffect(() => {
        const getMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?${key}&include_video=false&language=en-US&primary_release_date.gte=${yearFrom}&primary_release_date.lte=${yearTo}&vote_count.gte=100&include_video=false&page=${page}&sort_by=popularity.desc`
              
            )
            setMovies(response.data.results)
          } catch(error) {
            console.error('Error fetching  top movie list', error)
          }
            }
            getMovies() },[movies])

      const handleChangeYear = (e) => {
        setPage(e.target.value)
        
      }
 
  return (
    <div>
        <Header/>
        <h3>Top Horror movies by decade {year + "s"}</h3>
        <div className="year-selection">
        <h3>Page:</h3>
        <select className="year-selection" onChange={handleChangeYear}>
          {
            pages.map((page,key)=>(
              <option key={key} value={page}>{page}</option>
            ))
          }
    
        </select> 

    
       
        </div>
    <div className='top-movies'>
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
     
    </div>
  )
}

export default ByDecade
