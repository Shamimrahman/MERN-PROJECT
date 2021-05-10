import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
    <section className="text-gray-600 body-font -mt-5 sm:fixed ml-4">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Hello User !
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link to='/login'><button  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button></Link>
        <Link to='/registration'><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Register</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full overflow-y-hidden md:w-1/2 w-5/6 mt-3">
      <img className="object-cover object-center rounded" alt="hero" src="https://www.qad.com/blog/wp-content/uploads/2015/11/animated_Handshake_loop2.gif"/>
    </div>
  </div>
</section>
        </div>
    )
}

export default Home
