import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div class=' fixed grid sm:grid-cols-2 space-x-4 text-center justify-center mt-44 sm:mt-56 '>
            <div class='-mt-40 '>
            <img src='https://cdn.dribbble.com/users/447357/screenshots/2816714/404-800.gif'></img>
            </div>

            <div>
           
            <h1 class='sm:text-8xl text-3xl'>Error 404</h1>

            <div class="text-center mt-6">
            <Link to='/'> <button
            id="feedbackBtn"
            class="bg-green-600 text-white text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="submit"
            style={{ transition: "all 0.15s ease 0s" }}
          >
            Back To Home
          </button></Link>
          </div>
            </div>
            </div>
        </div>
    )
}

export default Error
