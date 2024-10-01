import { useState, useEffect, useRef } from "react"
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'
import './ByDecade.css'
import Header from "../headerandfooter/Header"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background:'black'
  },
};


const ByDecade = () => {
    let {year} = useParams()
    const yearFrom = year + "-01" + "-01"
    const yearTo = year.substring(0, year.length - 1) + "9" +"-12" +"-31"
    

    

    const [showYear, setShowYear] = useState('')
    const [movies, setMovies] = useState([])
    const [visible, setVisible] = useState(false)
    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
    
    
    useEffect(() => {
        const getMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?${key}&release_date.gte=${yearFrom}&release_date.lte=${yearTo}`
            // `https://api.themoviedb.org/3/discover/movie?api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27&release_date.gte=1980-01-01&release_date.lte=1989-01-01`
              
            )
            setMovies(response.data.results)
          } catch(error) {
            console.error('Error fetching  top movie list', error)
          }
            }
            getMovies() },[movies])



    // const getMovies = async (e) => {
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3/discover/movie?${key}&primary_release_year=${year}`
    //     )
    //     setMovies(response.data.results)
    //     console.log(response.data.results)
    //   } catch(error) {
    //     console.error('Error fetching  top movie list', error)
    //   }
    //     }

      const handleChangeYear = (e) => {
        year = e.target.value 
      }
 
  return (
    <div>
        <Header/>
        <div className="year-selection">
        <h3>Top Horror movies by decade {year + "s"}</h3>
        {/* <h3>Top Horror movies by year:</h3>
    
        <select className="year-selection" onChange={handleChangeYear}>
          <option value={1970}>1970</option>
          <option value={1971}>1971</option>
          <option value={1972}>1972</option>
          <option value={1973}>1973</option>
          <option value={1974}>1974</option>
          <option value={1975}>1975</option>
          <option value={1976}>1976</option>
          <option value={1977}>1977</option>
          <option value={1978}>1978</option>
          <option value={1979}>1979</option>
        </select> */}

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
