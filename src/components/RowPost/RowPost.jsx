
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
import { getUrl } from '../urls'

function RowPost({ title, isSmall, url }) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(url).then(Response => {
      setMovies(Response.data.results)
      console.log("Movies are")
      console.log(movies)

    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  const handleMovie = (id) => {
    axios.get(getUrl(id)).then(Response=>{
      console.log("Video")
      console.log(Response)
    })
   
  }
  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
        {movies &&
          movies.map((obj, index) => (
            <img onClick={()=>handleMovie(obj.id)} className={isSmall ? "small-poster" : "poster"} key={index} src={`${ imageUrl + obj.backdrop_path }`} alt='poster' />
          ))}
      </div>
      <YouTube opts={opts} videoId="2g811Eo7K8U" />
    </div>
  );
}


export default RowPost