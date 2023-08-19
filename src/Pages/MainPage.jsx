import React, {useState, useEffect} from 'react'
import Search from '../Components/Searcher/Search'
import Cards from '../Components/Cards/Cards'


const MainPage = ({Photos, SearchPicturesByWord}) => {

    return (
        <>
            <Search SearchPicturesByWord={SearchPicturesByWord}/>
            <Cards Photos={Photos} />
        </>
    )
}

export default MainPage
