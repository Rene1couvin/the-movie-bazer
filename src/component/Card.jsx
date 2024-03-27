import React from 'react'
function Card({title,price,vote,src,popula}){
  return(
    <div>
      <div className=' h-64 px-8'>
        <img src={src} className='min-w-24 h-28' />
        <p>{title}</p>
        <p>{price}</p>
        <p>{vote}</p>
        <p>{popula}</p>
      </div>
    </div>
  )
}
export default Card