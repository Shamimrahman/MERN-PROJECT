import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../Css/Registration.css";
function Registration() {

//Data store in usestate
 const[user,setUser]=useState({
   name:"",
   address:"",
   email:"",
   mobile:"",
   profession:"",
   password:"",
   confirmpass:""
 })

 let name,value 
 
 const handleInput=(e)=>{

  name=e.target.name
  value=e.target.value
  setUser({...user,[name]:value})

 }

//Data store in usestateend



  return (
    <div>
   
      <div class="flex justify-center sm:ml-50 w-half bg-white-400 sm:ml-16">
        <div class=" w-1/2   bg-white rounded shadow-2xl p-8 m-4 fix-contain">
          <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Register
          </h1>
          <form action="/" method="post">
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="first_name"
              >
                {" "}
                Name
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="username"
                onChange={handleInput}
                value={user.username}
               
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
              
              >
                Address
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="address"
                value={user.address}

                onChange={handleInput}

             
              />
            </div>
            <div class="flex flex-col mb-4">
              <label class="mb-2 font-bold text-lg text-gray-900" for="email">
                Email
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                value={user.email}

                onChange={handleInput}

              
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Mobile
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="number"
                name="mobile"
                value={user.mobile}

                onChange={handleInput}

              
              />
            </div>

            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Profession
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="profession"
                value={user.profession}

                onChange={handleInput}
              
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Password
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                value={user.password}

                onChange={handleInput}

               
              />
            </div>

            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Confirm Password
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="password"
                name="confirmpass"
                value={user.confirmpass}

                onChange={handleInput}

               
              />
            </div>
            <button
              class="block bg-green-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Create Account
            </button>
          </form>
        
          <Link to='/login'>  <a
          class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
          href="/login"
        >
          Already have an account?
        </a></Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;