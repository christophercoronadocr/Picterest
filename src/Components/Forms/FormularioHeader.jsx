import React, { useState } from 'react'

const FormularioHeader = ({ SearchPicturesByWord }) => {

    const [Texto, setTexto] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        SearchPicturesByWord(Texto);
    }

    return (
        <div className='w-full'>
            <div className='flex items-center justify-center space-x-2'>
                <div className='w-full text-center space-x-2'>
                    <input type="text" className='bg-gray-200 rounded-md p-5 shadow-md text-black w-4/12'
                        placeholder='Enter text'
                        onChange={(e) => setTexto(e.target.value)} value={Texto} />
                    <button type="button" className='bg-red-400 rounded-md p-5 shadow-md w-28 hover:bg-red-700 text-white text-lg'
                    onClick={(e) => onSubmitHandler(e)}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default FormularioHeader
