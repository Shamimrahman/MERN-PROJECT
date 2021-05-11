import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/Registration.css'
function Registration() {
  return (
    <div >
    <div class="flex justify-center sm:ml-50 w-half bg-white-400">
    <div class=" w-1/2   bg-white rounded shadow-2xl p-8 m-4 fix-contain">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register</h1>
        <form action="/" method="post">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name"> Name</label>
                <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Address</label>
                <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
            </div>
            <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="password">Mobile</label>
            <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
        </div>

        <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-gray-900" for="password">Profession</label>
        <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
    </div>
    <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-gray-900" for="password">Password</label>
        <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
    </div>

    <div class="flex flex-col mb-4">
    <label class="mb-2 font-bold text-lg text-gray-900" for="password">Confirm Password</label>
    <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
</div>
            <button class="block bg-green-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
        </form>
        <a class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/login">Already have an account?</a>
    </div>
</div>
    
     
     </div>
   
   
  )
}

export default Registration
