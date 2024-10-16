import { useEffect,  useState } from "react"
import axios from 'axios';
import Header from "../headerandfooter/Header";
import {useParams} from 'react-router-dom'
import './MovieDetails.css'
import Modal from 'react-modal'



const MovieDetails = () => {
  const goBack = () => {
    window.history.back();
  };

  const {id} = useParams()
  const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5'
  const [genres, setGenres] = useState ([])
  const [entry, setEntry] = useState ([])
  const [trailer,setTrailer] = useState('')
  const [visible, setVisible] = useState(false)
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

    useEffect(() => {
    const getEntries = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/movie/${id}?${key}`
            )
            setEntry(response.data)
            setGenres(response.data.genres)
           
          } catch(error) {
            console.error('Error Fetching Entry', error)
          }
            }
            getEntries() },[])


            useEffect(() => {
              document.addEventListener("mousedown", () => {
                setVisible(false)
              })
            })

   const fetcTrailer= async() => { try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=53c258bb52d305146e19a71e58aa2cc5`
              )
              const trailers = response.data.results.filter(
                (video) => video.type === "Trailer"
              );
              setTrailer(`https://www.youtube.com/embed/${trailers[0].key}`)
            } catch(error) {
              console.error('Error fetching  top movie list', error)
            }
            setVisible(true)
          }
      useEffect(() => {
            document.addEventListener("mousedown", () => {
              setVisible(false)
             
            })
          })


   
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
        <h4>Rated : {entry.vote_average}</h4>
        <h4 style={{fontSize:"16px", fontStyle:"italic"}}>{entry.tagline}</h4>
        <p className="genres"> Genres: {
       genres.map((genre) => 
        genre.name
        ).join(' ,')}
        </p>
       
        <p>Released: {entry.release_date}</p>
        <p>Runtime: {entry.runtime + " minutes"} </p>
       
        
        <p className="entry-description-text">{entry.overview}</p>
        <button onClick={fetcTrailer}>Watch trailer</button>
          <button onClick={goBack} className="return-btn"> Return </button>
        </div>
           <Modal isOpen={visible}  style={customStyles} 
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false) }>
           <iframe 
            className="trailer"
            width="800px"
            height="600px"
            src={trailer}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            ></iframe>
       
        </Modal>

      
     

   
      </div>

 
    </div>

    </div>
  )
}

export default MovieDetails
