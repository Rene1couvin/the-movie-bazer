import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTubeIframe from 'react-youtube-iframe';


function Full() {
    const {id} = useParams()
    const [movieKey,setMoviekey] = useState([])
    useEffect(() =>{
        const moviesData = async()=>{
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
            console.log(respone.data.results[0])
            setMoviekey(respone.data.results[0])
        }
        moviesData()
    },[]);
    console.log(movieKey.key)
    return (
        
        <div className='w-full h-full'>
        
            <YouTubeIframe videoId={`${movieKey.key}`}  className='w-full h-full'/>
        
        

        </div>
    )
}

export default Full