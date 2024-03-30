import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

// import Card from '../card'

function Detail() {

    const { id } = useParams()
    console.log(id)
    const [data, setData] = useState([])
    useEffect(() => {
        const detailData = async () => {
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
            console.log(respone)
            setData(respone.data)
        }
        detailData()
    }, [])

    console.log(data)
    return (
        <div>
            

            <div className='flex px-4'>
            <div className='w-1/2'>
                <NavLink to={`/movies/${data.id}`}>
                    <div className='-slate-500'>
                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='w-[44rem] h-[38rem] pl-8' />
                        
                    </div>
                </NavLink>

            </div>
            <div className='w-1/2'>
                <NavLink to={`/movies/${data.id}`}>
            <p className='text-4xl'>{data.original_title}</p>
                </NavLink>
            <p className='text-2xl'>{data.overview}</p>

            </div>
            </div>



        </div>
    )
}

export default Detail