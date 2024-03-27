import React from 'react'
function Card({title,price,vote,src,popula}){
  return(
    <div>
      <div className=' h-64 px-8 py-4'>
        <img src={src} className='sm:w-64 h-64' />
        <p>{title}</p>
        <p>{price}</p>
        <p>{vote}</p>
        <p>{popula}</p>
      </div>
    </div>
  )
}
export default Card