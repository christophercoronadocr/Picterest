import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Navs = () => {
    return (
        <nav className="py-4 h-1/6">
            <div className='container mx-auto px-4 '>
                <div className='flex items-center justify-between text-white'>
                    <div className='text-sm'>
                        <i className="fa-solid fa-camera-retro text-4xl"></i>
                        <Link className='font-bold' to={'/'}> PSEARCH</Link>
                    </div>
                    <div className='text-2xl'>
                        <Link to={'favorite'}>Favorites </Link>
                        <i className="fa fa-heart text-lg"></i>
                    </div>
                    <div className='text-2xl'>
                        <Link to={'/about'}>About Us </Link>
                        <i className="fa-solid fa-user text-lg"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navs
