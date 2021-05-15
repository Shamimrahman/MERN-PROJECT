import React,{useState} from "react";
import { Link ,useHistory } from "react-router-dom";
import "../Css/Registration.css";
function Registration() {

//for go the the define page
const history=useHistory()
//Data store in usestate
 const[user,setUser]=useState({
   username:"",
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
 
//send data to backend
const sendDataToBackend=async (e)=>{

  //destructure

  const{username,address,email,mobile,profession,password,confirmpass}=user
  //using fetch we need to send data into backend "/register" router.js

    const res=await fetch("http://localhost:5000/register",{
    //postman config
    method:"POST",
    headers:{
      "Content-Type":"application/json"
     
    },
    body:JSON.stringify({
      username,address,email,mobile,profession,password,confirmpass
      
    })

  })

  //data thik moto send hoise naki ta check korte hobe

  const data=await res.json()
  if(data.status===402|!data)
  {
  window.alert("Failed")
  }

  else{
     window.alert("Success")
    history.push('/login')
  }

}

//send data to backend end



  return (
    <div>
   
      <div className="flex justify-center sm:ml-50 w-half bg-white-400 sm:ml-16">
        <div className=" w-1/2   bg-white rounded shadow-2xl p-8 m-4 fix-contain">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Registration Form
          </h1>
          <form method="POST">
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="first_name"
              >
               
                Name
              </label>
              <input
              autoComplete="off"
               required
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="username"
                onChange={handleInput}
                value={user.username}
               
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
              
              >
                Address
              </label>
              <input
              autoComplete="off"
                required
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="address"
                value={user.address}

                onChange={handleInput}

             
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg text-gray-900" for="email">
                Email
              </label>
              <input
              autoComplete="off"
               required
                className="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                value={user.email}

                onChange={handleInput}

              
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
              
              >
                Mobile
              </label>
              <input
              autoComplete="off"
                required
                className="border py-2 px-3 text-grey-800"
                type="number"
                name="mobile"
                value={user.mobile}

                onChange={handleInput}

              
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
             
              >
                Profession
              </label>
              <input
              autoComplete="off"
               required
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="profession"
                value={user.profession}

                onChange={handleInput}
              
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Password
              </label>
              <input
              autoComplete="off"
               required
                className="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                value={user.password}

                onChange={handleInput}

               
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Confirm Password
              </label>
              <input
              
              required
                className="border py-2 px-3 text-grey-800"
                type="password"
                name="confirmpass"
                value={user.confirmpass}

                onChange={handleInput}

               
              />
            </div>
            <button
              className="block bg-green-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
              name='registration'
              value='register'
              onClick={sendDataToBackend}
            >
              Create Account
            </button>
          </form>
        
          <Link to='/login'>  <a
          className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
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