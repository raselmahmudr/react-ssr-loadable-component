import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchCurrentUser } from './store/actions/authAction'

import Navigation3 from './components/Navigation/Navigation3'
import "./style.scss";

import IconButton from './components/Button/IconButton'

import { Container } from './components/Layout'

import routes from './routes.js'


const App = ()=>{

  let clock = <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
  let bell = <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>

  
    return(
      <div className="App">

      <Navigation3/>


      {/* <DummyNav/> */}
  
      <Switch>
        {routes.map((route, i)=> <Route key={i} {...route} /> )}
      </Switch>
      
      <Container fluid>

        <IconButton size={20} color="red" type="far fa-heart" />
        <IconButton color="#602cbd" type="far fa-bell" />
        <IconButton svg>{clock}</IconButton>
        <IconButton svg>{bell}</IconButton>
      </Container>


      </div>
    )
}





export default App
