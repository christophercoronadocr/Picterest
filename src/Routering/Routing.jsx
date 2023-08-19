import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from '../Pages/MainPage'
import Favorite from '../Pages/Favorite'

const Routing = ({Photos, SearchPicturesByWord}) => {

  




  return (
    <Router>
        <Switch>
            <Route path={'/favorite'}>
                <Favorite />
            </Route>
            <Route path={'/'}>
                <MainPage Photos={Photos} SearchPicturesByWord={SearchPicturesByWord} />
            </Route>
        </Switch>
    </Router>
  )
}

export default Routing
