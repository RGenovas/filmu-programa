import { useState, useEffect, useRef } from "react"
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'
import './ByDecade.css'
import Header from "../headerandfooter/Header"
import Footer from "../headerandfooter/Footer"
import {RiKnifeBloodFill,  RiGhost2Fill} from "react-icons/ri"


const ByDecade = () => {
    let {year} = useParams()
    const yearFrom = year + "-01" + "-01"
    const yearTo = year.substring(0, year.length - 1) + "9" +"-12" +"-31"
    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1);
    const [morePages, setMorePages ] = useState('')
    const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5&with_genres=27'
    

    useEffect(() => {
      setPages(1)
    }, [year])
  
    
    useEffect(() => {
  
        const getMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?${key}&include_video=false&language=en-US&primary_release_date.gte=${yearFrom}&primary_release_date.lte=${yearTo}&vote_count.gte=50&include_video=false&page=${pages}&sort_by=vote_average.desc`
              
            )
            setMovies(response.data.results)
            setMorePages(response.data.total_pages)
          } catch(error) {
            console.error('Error fetching  top movie list', error)
          }
            }
            getMovies() },[movies])

        const nextPage = () => {
            pages < morePages ? setPages(pages + 1) : alert('No more results')
        }    

        const getMoreMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?${key}&include_video=false&language=en-US&primary_release_date.gte=${yearFrom}&primary_release_date.lte=${yearTo}&vote_count.gte=50&include_video=false&page=${pages}&sort_by=vote_average.desc`
              
            )
            setMovies(response.data.results)
            setMorePages(response.data.total_pages)
          } catch(error) {
            console.error('Error fetching  top movie list', error)
          }
            }
           

          
 
  return (
    <div>
        <Header/>
        <h3>Top Horror movies by decade {year + "s"}</h3>
    <div className='top-movies'>
      {
      movies.map((movie) => (
        <div key={movie.id} className='movie'>
        <h4 className="movie_name">{movie.title} ({movie.release_date.slice(0,4)})</h4>
        <h4 className="movie_rating"> <RiGhost2Fill/> Rating: {parseFloat(movie.vote_average).toFixed(2)}
        </h4>
        <img className='poster' src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path} ></img>
        <p className="movie-description">{movie.overview.slice(0,200) + '...'} </p>
        <Link  to={`/details/${movie.id}`}><button className="btn-link">Read more</button></Link>
        <Link to={`/trailer/${movie.id}`}><button  className="trailer-btn">Youtube Trailer</button></Link>

        </div>
      ))
      }
     
     </div> 
     <div className="year-selection">
        <h3 className="year-selection"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 18.484L77.59 90.588C74.865 139.18 53.842 176.38 25.2 210.62l-6.716-1.76v19.32l2.557.672c15.35 45.065 9.088 90.827 1.82 138.294l-4.376 2.047v20.63l9.18-4.294c6.516 10.707 13.658 27.047 19.06 41.33 4.283 11.33 7.474 20.984 9.253 26.535l-37.493 37.69v2.43h23.942l28.55-28.7c9.27-.363 41.77-1.473 82.7-.75 46.744.825 102.612 4.3 139.05 13.667l5.08 15.784h19.632l-7.43-23.088c35.94-41.51 71.912-80.525 131.734-102.34l51.774 20.486v-20.097l-42.983-17.008c-6.374-39.21 12.755-76.665 30.62-116.68l12.363-2.585v-19.092l-6.323 1.323-5.45-2.803C425.656 182.8 405.41 133.64 388.444 78.93l44.184-60.446h-23.15l-38.6 52.81c-58.273 1.254-112.475-2.463-154.446-37.79l-2.274-15.02h-18.9l2.838 18.75C170.96 66.224 140.532 85.188 93.512 80.59l-49.22-62.106H20.448zm199.917 41.004c40.608 26.304 88.498 30.894 136.754 30.63l-33.14 45.34c-36.588.396-69.856-3.034-95.845-24.638l-7.768-51.332zm-18.834.44l8.29 54.775c-17.815 18.616-37.294 30.18-67.995 26.854L108.752 99.82c38.593-.74 68.358-17.144 92.78-39.892zM374.857 97.52c15.536 46.967 37.05 92.69 84.55 122.722l-51.768 10.82-.816-.417c-37.27-19.145-50.445-51.64-61.935-88.83l-.716-2.315 30.683-41.98zm-280.74 13.918l34.393 43.398c-2.523 29.583-15.404 52.66-33.14 74.207L44.966 215.81c23.714-29.774 42.64-63.393 49.152-104.373zm137.848 24.69c23.936 13.694 51.05 17.4 78.404 17.948l-32.91 45.028c-15.058-6.364-26.137-17.753-38.57-30.325l-2.343-2.37-4.582-30.28zm-18.778.81l5.592 36.955c-11.176 7.5-24.436 12.15-39.046 15.492l-22.902-28.897c22.71-1.395 41.095-10.68 56.356-23.55zm117.38 21.173c9.746 29.155 23.146 58.017 50.58 78.49l-55.928 11.69c-12.997-11.182-19.977-24.734-27.156-39.89l-1.67-3.53 34.174-46.76zm-186.432 16.443l19.142 24.154-.078.71c-1.93 17.365-8.877 29.63-16.65 43.063l-31.536-8.28c13.212-17.356 23.94-36.828 29.12-59.647zm77.674 19.353l6.012 39.742c-3.617.69-7.056 1.875-10.25 3.48l-25.177-31.767c10.19-2.75 20.13-6.345 29.414-11.454zm19.36 3.043c7.355 6.578 15.52 12.722 25.152 17.39l-15.834 21.662c-1.176-.493-2.377-.94-3.607-1.318l-5.71-37.735zm-62.75 20.864l24.91 31.43c-1.593 2.197-2.96 4.566-4.08 7.07l-33.914-8.902c4.955-8.757 9.83-18.253 13.084-29.598zm105.525 4.082c5.12 10.415 11.104 21.095 19.653 30.913l-31.143 6.508c-1.58-4.496-3.943-8.624-6.937-12.21l18.427-25.212zM42.172 234.4l48.873 12.83c9.227 28.215 5.795 57.08 1.2 87.448L43.173 357.64c5.95-40.147 10.29-81.414-1-123.24zm416.142 5.162c-14.933 32.635-30.114 66.733-27.433 104.13l-43.74-17.307c-3.6-25.016 8.776-49.445 20.725-76.278l50.45-10.544zm-346.576 13.1l27.614 7.248.562 1.4c6.1 15.133 5.383 31.772 2.9 49.708l-30.318 14.185c3.214-23.512 4.976-47.812-.758-72.54zm273.295 2.217c-9.043 19.817-17.797 40.803-17.252 63.847l-36.587-14.477c-.004-13.148 1.395-22.84 9.12-33.92l4.98-7.144 39.74-8.307zm-224.36 10.628l35.237 9.252c.22 3.636.94 7.135 2.078 10.44l-35.27 16.503c1.05-11.9.927-24.048-2.044-36.195zm159.16 3c-4.625 9.433-6.38 18.89-6.948 28.498l-39.278-15.54c.266-1.125.47-2.273.64-3.43l45.585-9.528zm-54.796 29.662l36.504 14.443c-8.91 4.58-17.316 10.536-24.677 16.16-3.907 2.986-7.107 5.602-9.886 7.942l-10.102-31.397c3.04-2 5.786-4.408 8.162-7.148zm-58.12 3.484L169.26 339.51c-2.558-6.2-6.018-11.147-9.588-15.235l.088-.556 47.154-22.066zm17.73 8.672c3.377.94 6.93 1.455 10.607 1.455 1.35 0 2.686-.067 4.002-.2l10.473 32.54c-13.314-.16-37.613.076-61.693 3.01l36.61-36.804zm103.486 12.81l25.363 10.034c-29.4 14.92-50.376 35.896-69.252 57.2L273.2 356.05c3.554-3.174 8.73-7.63 15.01-12.427 11.42-8.727 26.208-17.7 35.685-19.627l4.238-.86zM141.635 332.2l1.517 1.525c5.848 5.875 9.973 10.303 11.223 20.75l-31.143 31.308c-.35-2.27-.738-4.63-1.2-7.142-2.01-10.95-4.448-22.942-9.325-32.904l28.928-13.535zm235.928 10.493l39.218 15.518c-49.423 22.5-82.915 56.684-113.45 91.47l-12.435-38.647c24.103-27.838 47.673-53.616 86.668-68.34zM95.577 353.75c3.002 6.837 6.222 18.17 8.076 28.266 1.582 8.61 2.5 16.08 2.98 20.45l-35.882 36.075c-1.68-4.98-3.777-10.96-6.55-18.29-5.374-14.216-11.993-30.012-19.61-42.64l50.986-23.86zm150.863 9.148c3.968-.006 6.814.03 9.35.065l10.396 32.3c-26.257-4.15-58.633-4.19-87.057-3.185-15.575.55-28.004 1.327-37.857 2.065l24.108-24.237.95-.23c23.746-5.79 59.86-6.746 80.11-6.778zm-42.192 47.39c24.924-.053 50.366 1.266 68.416 5.103l13.428 41.727c-38.708-8.23-88.984-10.977-132.086-11.738-27.222-.482-49.237-.188-63.87.173l30.8-30.963c7.765-.757 30.71-2.842 58.853-3.836 7.9-.28 16.15-.45 24.458-.467z"></path></svg></h3>


          <button onClick={nextPage}>Next Page</button>
          {
            pages > 1 && 
            <button onClick={() =>  setPages(pages - 1) }>Previous Page</button>
          }
          <p>Page: {pages} of {morePages}</p>
        </div>
        <Footer/>
    </div>
  )
}

export default ByDecade
