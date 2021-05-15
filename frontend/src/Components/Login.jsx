import React,{useState} from "react";
import Navbar from "./Navbar";
import "../Css/Login.css";
import{useHistory} from 'react-router-dom'

function Login() {

  const history=useHistory()
  //Onchange functionality to check amra j input nite pari
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  //login functionality send data from backend to frontend

  const login= async(e)=>{
    e.preventDefault()
    //send data
    //need to return promise

    const res=await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:
        JSON.stringify({
          email,password
        })

      

    })

    //ai porjonto kaj porar data backend a giye wait korbe
    //thn full complete korar jonno
    const data=res.json()
    if(res.status===400 || !data){
      window.alert("Invalid Credentials")
    }
    else{
      window.alert("Login Succeed")
      history.push("/")

    }



  }

  //data send end
  return (
    <div>
      <h1 className="text-center text-2xl mt-8 ml-42 mb-4">Login Page</h1>

      <div class="font-sans min-h-screen antialiased fixed-contain sm:pt-96">
        <div class="flex flex-col sm:w-96 sm:m-auto mx-5 space-y-8 ">
          <form method='POST' class="items-center">
            <div class="flex flex-col bg-white p-10 rounded-lg shadow-2xl space-y-6">
              <h1 class="font-bold text-xl text-center">
                Sign in to your account
              </h1>

              <div class="flex flex-col space-y-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div class="flex flex-col space-y-1">
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <div class="relative">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked
                  class="inline-block align-middle"
                />
                <label class="inline-block align-middle" for="remember">
                  Remember me
                </label>
              </div>

              <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <a
                  href="#"
                  class="inline-block text-blue-500 hover:text-blue-800 hover:underline"
                >
                  Forgot your password?
                </a>
                <button
                  type="submit"
                  class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                  onClick={login}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
