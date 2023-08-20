import React, { useEffect, useState } from 'react'
import CardsImage from '../Components/Cards/CardsImage'
import Navs from '../Components/Navs/Navs'


const Favorite = () => {
    const [photo, setphoto] = useState(null)

    useEffect(() => {

        if (localStorage.getItem("favorite") != null) {
            try {
                var array = localStorage.getItem('favorite');
                array = JSON.parse(array);
                setphoto(array)
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    return (
        <>
            <div className='bg-black'>
                <Navs />
            </div>
            <div className="flex mx-10 mt-10">
                <div className='w-full grid grid-cols-4'>
                    {
                        (photo != null)
                            ?
                            photo.map((photo, index) => <CardsImage key={index} id={photo.id} image={photo.image} author={photo.author} alts={photo.alts} profiler={photo.profiler} />)
                            : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Favorite
