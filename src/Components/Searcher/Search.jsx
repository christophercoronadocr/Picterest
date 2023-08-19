import React from 'react'
import Navs from '../Navs/Navs'
import FormularioHeader from '../Forms/FormularioHeader'


const Search = ({SearchPicturesByWord}) => {
    return (
        <div className='bg-cover bg-center' style={{backgroundImage:'url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
            <div>
            <Navs />
            </div>
            <div className='flex items-center justify-center h-60'>
                <p className='text-4xl font-bold text-white'>
                Las mejores fotos de stock gratis e imágenes libres de regalías
                </p>
            </div>
            <div className='flex justify-center h-52 mb-10'>
                <FormularioHeader SearchPicturesByWord={SearchPicturesByWord} />
            </div>
        </div>
    )
}

export default Search
