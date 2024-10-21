import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import Header from "../headerandfooter/Header";
import {BrowserRouter as Router, Routes, Route, Link, useParams,useNavigate} from 'react-router-dom'
import './MovieDetails.css'
import Modal from 'react-modal'
const MovieTrailer = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const key = 'api_key=53c258bb52d305146e19a71e58aa2cc5'
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
              document.addEventListener("mousedown", () => {
                navigate('/');
              })
            })

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
            setVisible(true)
          }
    fetcTrailer();
  


   
  return (
    <div>
       
           <Modal isOpen={visible}  style={customStyles} 
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false) }>
           <iframe 
            className="trailer"
            src={trailer}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            ></iframe>
       
        </Modal>

    </div>
  )
}

export default MovieTrailer
