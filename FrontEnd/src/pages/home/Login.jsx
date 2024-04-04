import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login from '../../../public/images/login.jpg'
import logo from "/logo.png";


const Login = () => {
  const initial = {
    emailId: "",
    password: "",
  };

  const Navigate = useNavigate();

  const [check, setCheckdata] = useState(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4898/check/user", check)
      .then((response) => {
        console.log(response.data);
        let token = response.data.token;
        localStorage.setItem("token", token);
        // const { response.message.data}=res.data
        if (response.data.success) {
          toast.success(response.data.success);
          Navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn("Invalid Credentials");
      })
      .finally();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckdata({ ...check, [name]: value });
  };

  return (
    // <div className='bg-[url("/images/login-bg.jpeg")]  bg-cover bg-no-repeat xl:bg-center w-screen h-screen flex justify-center items-center'>
    //   <div className="backdrop-blur-sm bg-white/30 w-full h-screen flex justify-center items-center">
    //     <div className="border-2 rounded-lg border-white w-[30rem]  flex justify-center items-center pt-[3rem] h-[35rem]">
    //       <form
    //         onSubmit={handleSubmit}
    //         className=" flex flex-col   gap-10 w-[20rem]  "
    //       >
    //         <h3 className="text-center font-bold mb-5 text-6xl">Login</h3>
    //         <input
    //           type="text"
    //           name="emailId"
    //           value={check.emailId}
    //           onChange={handleChange}
    //           placeholder="Enter your Email Id"
    //           className="text-center p-3  rounded-md bg-transparent text-black placeholder-black border-2 border-white text-xl"
    //         />
    //         <input
    //           type="password"
    //           name="password"
    //           onChange={handleChange}
    //           value={check.password}
    //           placeholder="Enter your Password"
    //           className="text-center p-3  rounded-md bg-transparent placeholder-black border-2 border-white text-xl"
    //         />
    //         <div className="flex justify-center  ">
    //           <button
    //             type="submit"
    //             className="border-2 border-white  bg-red-400  rounded-md w-[7rem] font-semibold p-2 "
    //           >
    //             Login
    //           </button>
    //         </div>
    //         <Link to={"/register"}>
    //           {" "}
    //           <p className="items-center flex justify-center">
    //             Don't have an account?
    //           </p>
    //         </Link>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    // <div className="w-[100%] h-[100%] mt-[3rem] border-2 border-black">
    //  <div className="flex">
    //    <div className="w-[50%] h-[600px] border-2 border-black">
    //     <img src={login} alt="" className="h-[600px] w-[2000px]"/>
    //    </div>
    //    <div className="w-[50%] h-[100%]">
    //     <form  onSubmit={handleSubmit}
    //        className=" flex flex-col gap-10 w-[50%] justify-center mx-[13rem]">
    //       <h1 className="text-center text-[4rem] font-bold ">Login</h1>
    //       <input
    //           type="text"
    //           name="emailId"
    //           value={check.emailId}
    //           onChange={handleChange}
    //           placeholder="Enter your Email Id"
    //           className="text-center p-3  rounded-md bg-transparent text-black placeholder-black border-2 border-black text-xl"
    //         />
    //         <input
    //           type="password"
    //           name="password"
    //           onChange={handleChange}
    //           value={check.password}
    //           placeholder="Enter your Password"
    //           className="text-center p-3  rounded-md bg-transparent placeholder-black border-2 border-white text-xl"
    //         />
    //     </form>
    //    </div>
    
    //    </div>
    // </div>


    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src={logo}
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              name="emailId"
              value={check.emailId}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={check.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <Link to={"/register"}><p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
      </p></Link>
    </div>
  </div>
  );
};

export default Login;
