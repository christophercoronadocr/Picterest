import React from 'react'
import CardsImage from './CardsImage'

const CardsSeparator = ({photo}) => {

    return (
        <>

            <div className='w-full'>
                {
                    photo.map((photo, index) => <CardsImage key={photo.id} image={photo.src.portrait} author={photo.photographer} alts={photo.alt} profiler={photo.photographer_url} />)
                }
            </div>

        </>
    )
}

export default CardsSeparator
