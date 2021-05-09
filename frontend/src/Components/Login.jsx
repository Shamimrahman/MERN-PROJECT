import React from 'react'
import Navbar from './Navbar'

function Login() {
    return (
        <div>
        <Navbar></Navbar>
        <h1 className='text-center text-2xl mt-8'>Login Page</h1>

        <div class="font-sans min-h-screen antialiased mt-8">
    <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 space-y-8">
      <form action="#">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow-2xl space-y-6">
          <h1 class="font-bold text-xl text-center">Sign in to your account</h1>

          <div class="flex flex-col space-y-1">
            <input type="text" name="username" id="username" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" />
          </div>

          <div class="flex flex-col space-y-1">
            <input type="password" name="password" id="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
          </div>

          <div class="relative">
            <input type="checkbox" name="remember" id="remember" checked class="inline-block align-middle" />
            <label class="inline-block align-middle" for="remember">Remember me</label>
          </div>

          <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
            <a href="#" class="inline-block text-blue-500 hover:text-blue-800 hover:underline">Forgot your password?</a>
            <button type="submit" class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Log In</button>
          </div>
        </div>
      </form>
     
    </div>
  </div>
      
</div>
    )
}

export default Login
