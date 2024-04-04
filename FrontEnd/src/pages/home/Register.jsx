import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Register = () => {
    const initial={
        emailId:"",
        password:"",
        userName:"",
        contact:"",
      }
    
    
    const Navigate=useNavigate();
    
    const [create,setCreatedata]=useState(initial)
      
    
      const handleSubmit= async(e)=>{
        e.preventDefault()
        await axios
        .post("http://localhost:4898/create/User",create)
        .then((response)=>{
          console.log(response.data)
          // const { response.message.data}=res.data
          if(response.data.success){
            toast.success(response.data.success);
            Navigate("/login");
          }
          
        })
        .catch((err)=>{
         console.log(err)
         toast.warn("User Already Registered")
        })
        .finally();
        
    
      }
    
      const handleChange=(event)=>{
        const {name,value}=event.target;
        setCreatedata({...create,[name]:value})
      }
    
  return (
//     <div className='bg-[url("/images/bg-image.jpeg")]  bg-cover bg-no-repeat xl:bg-center w-screen h-screen flex justify-center items-center'>
//     <div className="backdrop-blur-sm bg-white/30 w-full h-screen flex justify-center items-center">
  
//          <div className='border-2 rounded-lg border-white w-[30rem]  flex justify-center items-center pt-[1rem] h-[40rem]'>
           
//          <form onSubmit={handleSubmit} className=' flex flex-col   gap-10 w-[20rem] '>
//          <h3 className='text-center font-bold mb-5 text-6xl'>Register</h3>
//              <input type="text" name='userName' value={create.userName} onChange={handleChange} placeholder='Enter your User Name' className='text-center p-3  rounded-md bg-transparent text-black placeholder-black border-2 border-white text-xl'/>
//              <input type="email" name='emailId' onChange={handleChange} value={create.emailId} placeholder='Enter your Email' className='text-center p-3  rounded-md bg-transparent placeholder-black border-2 border-white text-xl'  />
//              <input type="password" name='password' onChange={handleChange} value={create.password} placeholder='Enter your Password' className='text-center p-3  rounded-md bg-transparent placeholder-black border-2 border-white text-xl'  />
//              <input type="text" name='contact' onChange={handleChange} value={create.contact} placeholder='Enter your Contact' className='text-center p-3  rounded-md bg-transparent placeholder-black border-2 border-white text-xl'  />
//             <div className='flex items-center flex-col justify-center'> 
//              <button type='submit' className='border-2 border-white  bg-red-400  rounded-md w-[7rem] font-semibold p-2 '>Register</button>
//              <Link to={'/login'}> <p className='items-center flex justify-center pt-4'>Already have an account?</p></Link>
//              </div>
      
//          </form>
        
//          </div>
//   </div>
//  </div>



<div class="bg-white w-screen font-sans text-gray-900">
  <div class=" ">
    <div class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div class="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
        <h1 class="mb-1 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">Sign up</h1>
      </div>
    </div>
  </div>
  <div class="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
    <form class="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8" onSubmit={handleSubmit}>
      <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">Name</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="name" placeholder="name" required="" name='userName' value={create.userName} onChange={handleChange}/><span class="my-2 block"></span></div>
      <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">E-mail</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="email" type="email" placeholder="email" required="" name='emailId' onChange={handleChange} value={create.emailId}/><span class="my-2 block"></span></div>
      <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">Password</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="password" type="password" placeholder="password" required="" name='password' onChange={handleChange} value={create.password}/><span class="my-2 block"></span></div>
      <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="phone">Phone Number</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="phone" type="phone" placeholder="Phone" required="" name='contact' onChange={handleChange} value={create.contact} /><span class="my-2 block"></span></div>
     
      <div class="py-12 text-center">
       <Link to={"/login"}> <p class="whitespace-nowrap text-gray-600">
          Don't have an account?
          <a href="#" class="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</a>
        </p></Link>
      </div>
      <div class="flex items-center justify-center">
        {/* <div class="flex-1"></div> */}
        <button class="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white" type="submit">Create account</button>
      </div>
    </form>
  </div>
</div>
)
}
export default Register