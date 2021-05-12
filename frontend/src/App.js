import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Route, Switch,Redirect } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Home from './Components/Home'
import Error from './Components/Error'





function App() {
  return (
    <div>
    <Navbar></Navbar>

<Switch>

    <Route exact path='/about' component={About} ></Route>
    <Route exact path='/contact' component={Contact} ></Route>
    <Route exact path='/login' component={Login} ></Route>
    <Route exact path='/registration' component={Registration} ></Route>
    <Route exact path='/'  component={Home}></Route>
   <Route path="*" component={Error} ></Route>
   <Redirect to="/" />



    </Switch>

    

    </div>
  )
}

export default App
