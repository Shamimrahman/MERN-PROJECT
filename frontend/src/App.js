import React from 'react'
import Navbar from './Components/Navbar'
import {Route, Switch } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Home from './Components/Home'




function App() {
  return (
    <div>
    <Switch>
    <Route path='/about' component={About} ></Route>
    <Route path='/contact' component={Contact} ></Route>
    <Route path='/login' component={Login} ></Route>
    <Route path='/registration' component={Registration} ></Route>
   <Route path='/'  component={Home}></Route>
    </Switch>

    </div>
  )
}

export default App
