import React from 'react'
import CardsSeparator from './CardsSeparator'


const Cards = ({Photos}) => {
    
    return (
        <>
            <div className="flex mx-10">
                {
                    (Photos[0] != undefined && Photos.length > 0)
                        ?
                        Photos.map((photo, index) => <CardsSeparator key={index} photo={photo} />)
                        : ""
                }
            </div>
        </>
    )
}

export default Cards
