import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import Header from "../headerandfooter/Header";
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
import './MovieDetails.css'
const MovieDetails = () => {

  const {id} = useParams()
  const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5'

  const [entry, setEntry] = useState ([])
  const [trailer,setTrailer] = useState('')

    useEffect(() => {
    const getEntries = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/movie/${id}?${key}`
            )
          
            console.log(response.data)
            setEntry(response.data)
           
          } catch(error) {
            console.error('Error Fetching Entry', error)
          }
            }
            getEntries() },[])

   const fetcTrailer= async() => { try {
              const response = await axios.get(
                // `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=53c258bb52d305146e19a71e58aa2cc5`
              )
              const trailers = response.data.results.filter(
                (video) => video.type === "Trailer"
              );
              setTrailer(`https://www.youtube.com/embed/${trailers[0].key}`)
            } catch(error) {
              console.error('Error fetching  top movie list', error)
            }
          }
  


   
  return (
    <div>
        <Header/>
        <div className="entry-details">
        <div  key={entry.id} className="entry">
        <div className="entry-details">
        <img className='poster' src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + entry.poster_path} ></img>
        </div>
        <div className="entry-description">
        <h4 className="movie_name">{entry.title}</h4>
        <p> Released: {entry.release_date}</p>
        <p className="entry-description-text">{entry.overview}</p>
        <button onClick={fetcTrailer}>See trailer</button>
        <Link to='/'>Return to frontpage</Link>
        </div>
        <iframe
            className="trailer"
            width="560"
            height="315"
            src={trailer}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            ></iframe>


      
     

   
      </div>

 
    </div>

    </div>
  )
}

export default MovieDetails
